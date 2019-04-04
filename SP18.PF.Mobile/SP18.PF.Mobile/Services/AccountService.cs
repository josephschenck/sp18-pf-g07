using Xamarin.Auth;
using SP18.PF.Mobile.Configuration;
using System.Linq;
using System.Net;
using System;

namespace SP18.PF.Mobile.Services
{
    public class AccountService
    {
        public void SaveAuthCookie(string username, string password, Cookie cookie)
        {
            if (!string.IsNullOrEmpty(username))
            {
                Account account = new Account
                {
                    Username = username,
                };
                account.Cookies.Add(cookie);
                account.Properties.Add("Password", password);
                AccountStore.Create().Save(account, AppSettings.AppName);
            }
        }

        public string UserName
        {
            get
            {
                var account = AccountStore.Create().FindAccountsForService(AppSettings.AppName).FirstOrDefault();
                return (account != null) ? account.Username : null;
            }
        }

        public Cookie Cookie
        {
            get
            {
                var account = AccountStore.Create().FindAccountsForService(AppSettings.AppName).FirstOrDefault();
                if (account == null)
                {
                    return null;
                }

                var cookies = account.Cookies.GetCookies(new Uri(AppSettings.ApiUrl));

                foreach (Cookie cookie in cookies)
                {
                    if (cookie.Name == AppSettings.AuthCookieName)
                    {
                        return cookie;
                    }
                }
                return null;
            }
        }

        public void DeleteCredentials()
        {
            var account = AccountStore.Create().FindAccountsForService(AppSettings.AppName).FirstOrDefault();
            if (account != null)
            {
                AccountStore.Create().Delete(account, AppSettings.AppName);
            }
        }
    }
}
