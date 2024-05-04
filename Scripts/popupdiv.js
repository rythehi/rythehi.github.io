function closediv() {
    document.getElementById('popupdiv').style.display = 'none';
    localStorage.setItem('gamespopupnews', 'hidden'); // Set a flag to indicate it has been closed
  }
  
  window.onload = function() {
    const pop = localStorage.getItem('gamespopupnews');
    if (pop !== 'hidden') {
      document.getElementById('popupdiv').style.display = "block";
      console.log('if called');
    } else {
      document.getElementById('popupdiv').style.display = "none";
      console.log('else called');
    }
    localStorage.setItem('gamespopupnews', 'hidden'); // Set the flag to 'hidden' after showing it once
  };