const pop = localStorage.getItem('gamespopupnews') || 0;
console.log(pop);
if (pop == 1) {
  console.log('if triggered')
  document.getElementById('popupdiv').style.display = "none";
  console.log('if called');
}
function closediv() {
    document.getElementById('popupdiv').style.display = 'none';
    localStorage.setItem('gamespopupnews', 0);
    console.log('closed');
  }