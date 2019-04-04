using SP18.PF.Core.Features.Tickets;
using SP18.PF.Mobile.RestClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace SP18.PF.Mobile.Services
{
	public class TicketsServices
	{
		public async Task<List<Ticket>> GetTicketsAsync()
		{
            RestClient<Ticket> restClient = new RestClient<Ticket>();
            var ticketsList = await restClient.GetAsync();
            return ticketsList;
		}
	}
}