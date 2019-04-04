using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using SP18.PF.Core.Features.Tickets;
using SP18.PF.Mobile.Services;
using System.Runtime.CompilerServices;

namespace SP18.PF.Mobile.ViewModel.ProfileViewModels
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class TicketsViewModel : INotifyPropertyChanged
	{
        private List<Ticket> _ticketsList;

        public List<Ticket> TicketsList
        {
            get { return _ticketsList; }
            set { _ticketsList = value; OnPropertyChanged(); }
        }

		public TicketsViewModel ()
		{
            InitializeDataAsync();
		}

        private async Task InitializeDataAsync()
        {
            var ticketsServices = new TicketsServices();
            TicketsList = await ticketsServices.GetTicketsAsync();
        }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
	}
}