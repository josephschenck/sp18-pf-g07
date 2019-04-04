using System;
using SP18.PF.Mobile.ViewModel;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.Mobile.View.Login
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class LoginPage : ContentPage
	{
        private LoginViewModel viewModel;

		public LoginPage()
		{
			InitializeComponent();

            viewModel = new LoginViewModel();
            viewModel.Navigation = Navigation;
            BindingContext = viewModel;
		}

        protected override void OnAppearing()
        {
            viewModel.ShowLoginFailure += HandleShowLoginFailure;
        }

        protected override void OnDisappearing()
        {
            viewModel.ShowLoginFailure -= HandleShowLoginFailure;
        }

        private async void HandleShowLoginFailure(object sender, EventArgs e)
        {
            await DisplayAlert("Invalid Login", "You have entered invalid credentials. Please try again.", "Close");
        }
    }
}