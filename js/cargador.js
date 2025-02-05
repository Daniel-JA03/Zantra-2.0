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
/**-----------------------------------------------------------------------------------------
 * * Cambiar el header al abrir un DROPDOWN
 */
const navMenu = document.getElementById("nav-menu");
const lanHeader = document.getElementById("landing-header");

navMenu.addEventListener("mouseenter", () => {
    lanHeader.style.backgroundColor = "white";
    lanHeader.style.color = "black"
});
lanHeader.addEventListener("mouseleave", () => {

    lanHeader.style.backgroundColor = "";
    lanHeader.style.color = "white";
});