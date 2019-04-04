using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;
using Plugin.Messaging;

namespace SP18.PF.Mobile.View
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class ContactUs : ContentPage
	{
		public ContactUs ()
		{
			InitializeComponent ();
		}

        private void SendEmail_OnClicked(object sender, EventArgs e)
        {
            var emailTask = CrossMessaging.Current.EmailMessenger;
            if (emailTask.CanSendEmail)
            {
                // Send a more complex email with the EmailMessageBuilder fluent interface.
                //Uses a xam messaging plugin
                var email = new EmailMessageBuilder()
                  .To("joseph.schenck@selu.edu")
                  .Cc("joseph.schenck@selu.edu")
                  .Subject("Ticket Purchase Question")
                  .Body("")
                  .Build();

                emailTask.SendEmail(email);
            }
        }
	}
}