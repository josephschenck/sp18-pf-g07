using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.Mobile.View.ProfileViews
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Tickets : ContentPage
	{
		public Tickets ()
		{
            InitializeComponent();
        }

        async void Ticket_Tapped(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new QRPage());
        }
        


    }
}