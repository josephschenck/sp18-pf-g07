using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using SP18.PF.Mobile.View;
using SP18.PF.Mobile.View.TestViews;
using SP18.PF.Mobile.View.ProfileViews;
using SP18.PF.Mobile.Services;
using SP18.PF.Mobile.View.Login;

namespace SP18.PF.Mobile
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Profile : ContentPage
	{
		public Profile ()
		{
			InitializeComponent ();
		}

        async void Tickets_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new Tickets());
        }

        //async void Tests_Clicked(object sender, EventArgs e)
        //{
        //    await Navigation.PushAsync(new TestView());
        //}
        async void LogOut_Clicked(object sender)
        {

            var accountService = new AccountService();

            accountService.DeleteCredentials();


            await Navigation.PushAsync(new LoginPage());

            var existingPages = Navigation.NavigationStack.ToList();
            foreach (var page in existingPages)
            {
                Navigation.RemovePage(page);
            }


        }
    }
}