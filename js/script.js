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



/**-----------------------------------------------------------------------------
 * *Cambio de color al header
 */
const header = document.querySelector('#landing-header')
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.90,      // porcentaje de visibilidad
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            const color = entry.target.getAttribute('data-header-color')
            header.style.color = color
        }
    })
}, observerOptions)

const sections = document.querySelectorAll(".landing-section")
sections.forEach((section) => observer.observe(section))


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


/**-------------------------------------------------------------------------
 * * Multi-Idiomas (Ingles e Español)
 */

function cambiarIdioma(idioma) {
    if (idioma === 'es') {
        window.location.href = '/paginas/index.html'; 
    } else if (idioma === 'en') {
        window.location.href = '/paginas/ingles/pa_ingles.html'; 
    }
}
