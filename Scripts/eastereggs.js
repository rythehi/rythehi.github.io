function exchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.position = "relative";
    chat.style.top = "5%";
    chat.style.height = "83%";
    sidebuttons.style.display = "none";
    button.innerHTML = "Unexpand Chat";
    button.setAttribute('onclick', 'unchat()')
}
function unchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.position = "relative";
    chat.style.top = "";
    chat.style.height = "38%";
    sidebuttons.style.display = "block";
    button.innerHTML = "Expand Chat";
    button.setAttribute('onclick', 'exchat()')
}