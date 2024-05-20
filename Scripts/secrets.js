window.onload = function(){
    var load = localStorage.getItem('secretload') || 1;
    console.log(load);
    if (load == 0){
        console.log('if triggered');
        const tut = document.getElementById('tut');
        tut.style.display = 'block';
        localStorage.setItem('secretload', 1)
    }
}