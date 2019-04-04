using Newtonsoft.Json;
using SP18.PF.Mobile.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using SP18.PF.Mobile.Services;
using SP18.PF.Mobile.Configuration;

namespace SP18.PF.Mobile.RestClient
{
	public class RestClient<T>
	{
        //get or read
		public async Task<List<T>> GetAsync()
		{
            var accountService = new AccountService();
            var cookieContainer = new CookieContainer();
            var handler = new HttpClientHandler
            {
                CookieContainer = cookieContainer
            };

            cookieContainer.Add(accountService.Cookie);
            var httpClient = new HttpClient(handler);
            var json = await httpClient.GetStringAsync(AppSettings.ApiUrl + "tickets");
            var taskModels = JsonConvert.DeserializeObject<List<T>>(json);
            return taskModels;
		}

        //push or create
        public async Task<bool> PostAsync(T t)
        {
            var httpClient = new HttpClient();
            var json = JsonConvert.SerializeObject(t);
            HttpContent httpContent = new StringContent(json);
            httpContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            var result = await httpClient.PostAsync(AppSettings.ApiUrl, httpContent);
            return result.IsSuccessStatusCode;
        }

        public async Task<LoginDTO> CreateSession(string username, string mypassword)
        {
            var url = string.Format(AppSettings.ApiUrl + "users/login");
            var cookieContainer = new CookieContainer();
            var handler = new HttpClientHandler
            {
                CookieContainer = cookieContainer
            };

            var httpClient = new HttpClient(handler);

            var json = JsonConvert.SerializeObject(new { email = username, password = mypassword });
            HttpContent httpContent = new StringContent(json);
            httpContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            var resp = await httpClient.PostAsync(url, httpContent);

            var content = resp.Content.ReadAsStringAsync().Result;

            if (resp.IsSuccessStatusCode)
            {
                var result = JsonConvert.DeserializeObject<LoginDTO>(content);
                var accountService = new AccountService();

                accountService.DeleteCredentials();
                var cookies = handler.CookieContainer.GetCookies(new Uri(url));

                foreach (Cookie cookie in cookies)
                {
                    if (cookie.Name == AppSettings.AuthCookieName)
                    {
                        accountService.SaveAuthCookie(username, mypassword, cookie);
                        return result;
                    }
                }

                return null;
            }

            return null;
        }

        //edit or update
        public async Task<bool> PutAsync(int id, T t)
        {
            var httpClient = new HttpClient();
            var json = JsonConvert.SerializeObject(t);
            HttpContent httpContent = new StringContent(json);
            httpContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            var result = await httpClient.PutAsync(AppSettings.ApiUrl + id, httpContent);
            return result.IsSuccessStatusCode;
        }

        //delete
        public async Task<bool> DeleteAsync(int id, T t)
        {
            var httpClient = new HttpClient();
            var result = await httpClient.DeleteAsync(AppSettings.ApiUrl + id);
            return result.IsSuccessStatusCode;
        }
	}
}