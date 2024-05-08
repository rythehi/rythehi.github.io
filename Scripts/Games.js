function toydefense(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = "games/ubggames/toy-defense-unblocked.html";
    app.style.display = "block";
    parent.style.display = "none";
    nparent.style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}