using SP18.PF.Core.Features.Test;
using SP18.PF.Mobile.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace SP18.PF.Mobile.ViewModel.TestViewModels
{
	public partial class TestViewModel : INotifyPropertyChanged
	{
        private List<Test> _testsList;
        public List<Test> TestsList
        {   get { return _testsList; }
            set
            {
                _testsList = value;
                OnPropertyChanged();
            }
        }
		public TestViewModel ()
		{
            //InitializeComponent ();
            var testservices = new TestsServices();
            TestsList = testservices.GetTestInfo();
		}

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
	}
}