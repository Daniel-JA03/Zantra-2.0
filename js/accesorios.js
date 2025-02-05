// pantalla formato celular sub-menu
const openMenu = () => {
    // menu para dispositivos moviles
    document.querySelector('.backdrop').className = "backdrop active";
    document.querySelector("aside").className = "active";
}
const closeMenu = () => {
    // menu para dispositivos moviles
    document.querySelector('.backdrop').className = "backdrop";
    document.querySelector("aside").className = "";
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector("aside button.close").onclick = e => {
    closeMenu();
}
document.querySelector(".backdrop").onclick = e => {
    closeMenu();
}

//* cambio de imagenes de tienda
function cambio1() {
    document.getElementById("img1").src = "../img/accesorio1.2.avif";
}
function cambio2() {
    document.getElementById("img1").src = "../img/accesorio1.1.avif";
}
function cambio3() {
    document.getElementById("img2").src = "../img/accesorio4.2.avif";
}
function cambio4() {
    document.getElementById("img2").src = "../img/accesorio4.1.avif";
}
function cambio5() {
    document.getElementById("img3").src = "../img/accesorio6.2.avif";
}
function cambio6() {
    document.getElementById("img3").src = "../img/accesorio6.1.avif";
}
function cambio7() {
    document.getElementById("img4").src = "../img/accesorio8.2.avif";
}
function cambio8() {
    document.getElementById("img4").src = "../img/accesorio8.1.avif";
}
function cambio9() {
    document.getElementById("img5").src = "../img/accesorio9.2.avif";
}
function cambio10() {
    document.getElementById("img5").src = "../img/accesorio9.1.avif";
}