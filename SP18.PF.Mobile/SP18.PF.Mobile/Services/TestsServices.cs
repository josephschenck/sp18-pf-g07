using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Xamarin.Forms;
using SP18.PF.Core.Features.Test;

namespace SP18.PF.Mobile.Services
{
	public class TestsServices
	{
		public List<Test> GetTestInfo()
		{
            var list = new List<Test>
            {
                new Test
                {
                    Name = "Aaron",
                    Number = "1",
                    Description = "Bought ticket at venue 1."
                },
                new Test
                {
                    Name = "Sam",
                    Number = "2",
                    Description = "Bought ticket at venue 2."
                },
                new Test
                {
                    Name = "Fred",
                    Number = "3",
                    Description = "Bought ticket at venue 3."
                },
                new Test
                {
                    Name = "Carolina",
                    Number = "4",
                    Description = "Bought ticket at venue 4."
                },
                new Test
                {
                    Name = "Tina",
                    Number = "5",
                    Description = "Bought ticket at venue 5."
                },
            };

            return list;
		}
	}
}