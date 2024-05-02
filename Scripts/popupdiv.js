function closediv() {
    document.getElementById('popupdiv').style.display = 'none';
    localStorage.setItem('gamespopupnews', '1');
}

window.onload = function() {
    const pop = localStorage.getItem('gamespopupnews');
    if (pop === '1') {
        document.getElementById('popupdiv').style.display = "none";
    } else {
        document.getElementById('popupdiv').style.display = "block";
    }
    console.log(localStorage.getItem('gamespopupnews'));
}