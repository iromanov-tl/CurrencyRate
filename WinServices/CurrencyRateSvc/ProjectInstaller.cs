using System.ComponentModel;
using System.Configuration.Install;

namespace TravelLine.CurrencyRate.Services.CurrencyRateSvc
{
    [RunInstaller( true )]
    public partial class ProjectInstaller : Installer
    {
        public ProjectInstaller()
        {
            InitializeComponent();
        }
    }
}