module WebAppTemplate.Application {

    export class Constants {
        public static loginUrl:             string = '/secure/Enter.aspx';
        /** Base web app path */
        public static baseAppUrl: string = '/secure/webAppTemplate/Extranet/#';
        /** Relative path to pages */
        public static templateBaseUrl:      string = 'src/pages/';
        public static baseServiceUrl:       string = '/secure/webAppTemplate/extranet-api/';
        public static appConfigUrl:         string=  '/secure/webAppTemplate/extranet-api/application/config';
        public static extranetHostDataUrl: string = '/secure/extranet/service/application/extranet-host-data';

    }

}