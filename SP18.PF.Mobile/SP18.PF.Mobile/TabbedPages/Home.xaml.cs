using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using SP18.PF.Mobile.View;
using SP18.PF.Mobile.Services;
using SP18.PF.Mobile.View.Login;

namespace SP18.PF.Mobile
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Home : ContentPage
	{
		public Home ()
		{
			InitializeComponent ();
		}

        async void Location1_Clicked(object sender, EventArgs e)
        {

            var answer = await DisplayAlert("Leaving App!", "You're about to leave the JBC App to go to an outside site. Continue?", "Yes", "No");

            if (answer)
            {
                if (Device.RuntimePlatform == Device.iOS)
                {
                    // opens Apple Maps app directly
                    Device.OpenUri(new Uri("http://maps.apple.com/?q=4+Pennsylvania+Plaza+New+York,+NY+10001"));
                }
                else if (Device.RuntimePlatform == Device.Android)
                {
                    // opens Google Maps app directly
                    Device.OpenUri(new Uri("geo:0,0?q=4+Pennsylvania+Plaza+New+York,+NY+10001"));

                }
            }

        }
        async void Location2_Clicked(object sender, EventArgs e)
        {

            var answer = await DisplayAlert("Leaving App!", "You're about to leave the JBC App to go to an outside site. Continue?", "Yes", "No");

            if (answer)
            {
                if (Device.RuntimePlatform == Device.iOS)
                {
                    // opens Apple Maps app directly
                    Device.OpenUri(new Uri("http://maps.apple.com/?q=1500+Sugar+Bowl+Drive+New+Orleans,+LA+70112"));
                }
                else if (Device.RuntimePlatform == Device.Android)
                {
                    // opens Google Maps app directly
                    Device.OpenUri(new Uri("geo:0,0?q=1500+Sugar+Bowl+Drive+New+Orleans,+LA+70112"));

                }
            }

        }
        async void Location3_Clicked(object sender, EventArgs e)
        {

            var answer = await DisplayAlert("Leaving App!", "You're about to leave the JBC App to go to an outside site. Continue?", "Yes", "No");

            if (answer)
            {
                if (Device.RuntimePlatform == Device.iOS)
                {
                    // opens Apple Maps app directly
                    Device.OpenUri(new Uri("http://maps.apple.com/?q=18300+West+Alameda+Parkway+Morrison,+CO+80465"));
                }
                else if (Device.RuntimePlatform == Device.Android)
                {
                    // opens Google Maps app directly
                    Device.OpenUri(new Uri("geo:0,0?q=11109+Jerusalem+Church+Rd.+Hammond,+LA+70403"));

                }
            }

        }
        async void Location4_Clicked(object sender, EventArgs e)
        {

            var answer = await DisplayAlert("Leaving App!", "You're about to leave the JBC App to go to an outside site. Continue?", "Yes", "No");

            if (answer)
            {
                if (Device.RuntimePlatform == Device.iOS)
                {
                    // opens Apple Maps app directly
                    Device.OpenUri(new Uri("http://maps.apple.com/?q=2301+North+Highland+Avenue+Los+Angeles,+CA+90068"));
                }
                else if (Device.RuntimePlatform == Device.Android)
                {
                    // opens Google Maps app directly
                    Device.OpenUri(new Uri("geo:0,0?q=11109+Jerusalem+Church+Rd.+Hammond,+LA+70403"));

                }
            }

        }
        async void Location5_Clicked(object sender, EventArgs e)
        {

            var answer = await DisplayAlert("Leaving App!", "You're about to leave the JBC App to go to an outside site. Continue?", "Yes", "No");

            if (answer)
            {
                if (Device.RuntimePlatform == Device.iOS)
                {
                    // opens Apple Maps app directly
                    Device.OpenUri(new Uri("http://maps.apple.com/?q=1111+South+Figueroa+Street+Los+Angeles,+CA+90015"));
                }
                else if (Device.RuntimePlatform == Device.Android)
                {
                    // opens Google Maps app directly
                    Device.OpenUri(new Uri("geo:0,0?q=11109+Jerusalem+Church+Rd.+Hammond,+LA+70403"));

                }
            }

        }

        async void AboutUs_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new AboutUs());
        }

        async void ContactUs_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new ContactUs());
        }

    }
}