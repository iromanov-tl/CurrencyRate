using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Xml;
using TravelLine.CurrencyRate.Core.Configuration;
using TravelLine.CurrencyRate.Core.Domain.Logging;
using TravelLine.CurrencyRate.Core.Services.Logging;
using TravelLine.CurrencyRate.Core.Util;

namespace TravelLine.CurrencyRate.Core.Services
{
    public class ExportActivityLogService : IExportActivityLogService
    {
        readonly IActivityLogService _activityLogService;

        static readonly Uri LogSystemServiceUrl;
        static readonly string LogSystemClientName = "travelline";
        static readonly int RecordsAtOnce = 50;
        static readonly int MaxContentLength = 6144;
        static readonly int ExportAttempts = 3;

        public ExportActivityLogService( IActivityLogService activityLogService )
        {
            _activityLogService = activityLogService;
        }

        static ExportActivityLogService()
        {
            if ( LogSystemConfiguration.Settings != null )
            {
                LogSystemServiceUrl = new Uri( LogSystemConfiguration.Settings.ServiceUrl );
                LogSystemClientName = LogSystemConfiguration.Settings.ClientName;
                RecordsAtOnce = LogSystemConfiguration.Settings.RecordsAtOnce;
                MaxContentLength = LogSystemConfiguration.Settings.MaxContentLength * 1024;
                ExportAttempts = LogSystemConfiguration.Settings.ExportAttempts;
            }
        }

        string EncodeStringToBase64( string stringToEncode )
        {
            return string.IsNullOrEmpty(stringToEncode) ? string.Empty : Convert.ToBase64String( Encoding.UTF8.GetBytes( stringToEncode ) );
        }

        string BuildXml( IEnumerable<ActivityLog> logs, ref List<ActivityLog> processedLogs )
        {
            var stXml = new MemoryStream();
            var stXmlBuffer = new MemoryStream();
            var xmlWriterSettings = new XmlWriterSettings { Encoding = new UTF8Encoding( false ) };

            long xmlTailLength;
            using ( XmlWriter xmlWriter = XmlWriter.Create( stXmlBuffer, xmlWriterSettings ) )
            {
                // calculate xml tail length
                xmlWriter.WriteStartElement( "data" );

                xmlWriter.WriteStartElement( "text" );
                xmlWriter.WriteEndElement();
                xmlWriter.Flush();
                long xmlTailOffset = stXmlBuffer.Length;

                xmlWriter.WriteEndElement(); //data
                xmlWriter.Flush();
                xmlTailLength = stXmlBuffer.Length - xmlTailOffset;
                stXmlBuffer.SetLength(0);
            }

            using ( XmlWriter xmlWriter = XmlWriter.Create( stXmlBuffer, xmlWriterSettings ) )
            {
                xmlWriter.WriteStartElement( "data" );

                foreach ( ActivityLog log in logs )
                {
                    xmlWriter.WriteStartElement( "log_item" );

                    xmlWriter.WriteElementString( "date", DateTimeUtil.ToLogSystemTime( log.Time ).ToString( "o" ) );
                    xmlWriter.WriteElementString( "val1", EncodeStringToBase64( "user-activity" ) );
                    xmlWriter.WriteElementString( "val2", EncodeStringToBase64( log.Url ) );
                    xmlWriter.WriteElementString( "val3", EncodeStringToBase64( log.Parameters ) );
                    xmlWriter.WriteElementString( "val4", "" );
                    xmlWriter.WriteElementString( "val5", "" );
                    xmlWriter.WriteElementString( "val6", "UserActivity" );
                    xmlWriter.WriteElementString( "val7", String.Format("CurrencyRate_{0}", log.Id) );
                    xmlWriter.WriteElementString( "val10", EncodeStringToBase64( log.Detail ) );
                    xmlWriter.WriteElementString( "parent", "" );

                    xmlWriter.WriteEndElement(); //log_item

                    foreach ( ActivityLogEntity logEntity in log.Entities )
                    {
                        xmlWriter.WriteStartElement( "log_item" );

                        xmlWriter.WriteElementString( "date", DateTimeUtil.ToLogSystemTime( log.Time ).ToString( "o" ) );
                        xmlWriter.WriteElementString( "val1", EncodeStringToBase64( "entity-state" ) );
                        xmlWriter.WriteElementString( "val2", EncodeStringToBase64( logEntity.Name ) );
                        xmlWriter.WriteElementString( "val3", EncodeStringToBase64( logEntity.Key ) );
                        xmlWriter.WriteElementString( "val4", EncodeStringToBase64( logEntity.Description ) );
                        xmlWriter.WriteElementString( "val5", "" );
                        xmlWriter.WriteElementString( "val6", "" );
                        xmlWriter.WriteElementString( "val7", "" );
                        xmlWriter.WriteElementString( "val10", EncodeStringToBase64( logEntity.Data ) );
                        xmlWriter.WriteElementString( "parent", String.Format("CurrencyRate_{0}", log.Id) );

                        xmlWriter.WriteEndElement(); //log_item
                    }

                    xmlWriter.Flush();

                    if ( stXml.Length + stXmlBuffer.Length + xmlTailLength > MaxContentLength )
                    {
                        stXmlBuffer.SetLength( 0 );
                        break;
                    }

                    xmlWriter.Flush();
                    stXmlBuffer.Position = 0;
                    stXmlBuffer.CopyTo( stXml );
                    stXmlBuffer.SetLength( 0 );
                    processedLogs.Add( log );
                }

                xmlWriter.WriteEndElement(); //data
                xmlWriter.Flush();
                stXmlBuffer.Position = 0;
                stXmlBuffer.CopyTo( stXml );
            }
            stXml.Position = 0;
            return xmlWriterSettings.Encoding.GetString( stXml.ToArray() );
        }

        string ExportXml( string xml )
        {
            /*
                Данные передавать необходимо POST`ом с 2-мя параметрами:
                  client (ид-р клиента, обязательный параметр, строка),
                  records (данные логов в формате xml)
            */
            Uri url = LogSystemServiceUrl;
            using ( var wc = new WebClient() )
            {
                var parameters = new NameValueCollection();
                parameters["client"] = LogSystemClientName;
                parameters["records"] = xml;
                byte[] response = wc.UploadValues( url, parameters );
                return Encoding.UTF8.GetString( response );
            }
        }

        #region IExportActivityLogService Members

        public string SendLog()
        {
            int errorCounter = 0;
            var exportResults = new List<string>();

            var logs = _activityLogService.GetLogPortion( RecordsAtOnce ).ToList();
            while ( logs.Count > 0 )
            {
                var processedLogs = new List<ActivityLog>();
                string xml = BuildXml( logs, ref processedLogs );

                if ( processedLogs.Count == 0 )
                {
                    return String.Join( "\n", String.Format( "Processed log records: 0. Most likely too big log record or too small maxContentLength parameter (currently {0} KB).", MaxContentLength ) );
                }
                try
                {
                    string exportResult = ExportXml( xml );
                    if ( exportResult != null && ( exportResult == "OK" || exportResult.StartsWith( "Warning" ) ) )
                    {
                        errorCounter = 0;
                        exportResults.Clear();
                        _activityLogService.DeleteActivity( processedLogs );
                    }
                    else
                    {
                        exportResults.Add( String.Format( "Result #{0}: {1}", errorCounter, exportResult ?? String.Empty ) );
                        if ( ++errorCounter >= ExportAttempts )
                        {
                            return String.Join( "\n", exportResults.ToArray() );
                        }
                        continue;
                    }
                }
                catch ( Exception ex )
                {
                    return ex.ToString();
                }

                logs = _activityLogService.GetLogPortion( RecordsAtOnce ).ToList();
            }
            return string.Empty;
        }

        #endregion
    }
}