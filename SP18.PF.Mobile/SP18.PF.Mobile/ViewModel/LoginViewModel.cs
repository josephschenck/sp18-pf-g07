using System;
using Xamarin.Forms;
using SP18.PF.Mobile.RestClient;
using SP18.PF.Core.Features.Users;
using System.Linq;

namespace SP18.PF.Mobile.ViewModel
{
    public class LoginViewModel : BaseViewModel
    {
        private string emailAddress = string.Empty;
        private string password = string.Empty;

        public LoginViewModel()
        {
            LoginCommand = new Command(HandleLoginClicked);
        }

        public Command LoginCommand { get; set; }

        public event EventHandler ShowLoginFailure;

        public string EmailAddress
        {
            get { return emailAddress; }
            set
            {
                emailAddress = value;
                OnPropertyChanged();
            }
        }

        public string Password
        {
            get { return password; }
            set
            {
                password = value;
                OnPropertyChanged();
            }
        }

        private async void HandleLoginClicked(object obj)
        {
            RestClient<User> restClient = new RestClient<User>();
            var result = await restClient.CreateSession(emailAddress, password); 
            
            if (result != null)
            {
                await Navigation.PushAsync(new TabPage());

                var existingPages = Navigation.NavigationStack.ToList();
                foreach (var page in existingPages)
                {
                    Navigation.RemovePage(page);
                }
            }
            else
            {
                ShowLoginFailure?.Invoke(this, null);
            }
        }
    }
}