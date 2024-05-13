function exchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.display = 'block';
    sidebuttons.style.display = "none";
    button.innerHTML = "Unexpand Chat";
    button.setAttribute('onclick', 'unchat()')
}
function unchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.display = "none";
    sidebuttons.style.display = "block";
    button.innerHTML = "Expand Chat";
    button.setAttribute('onclick', 'exchat()')
}
