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
document.getElementById("img1").src = "../img/ropa8.2.webp";
}
function cambio2() {
document.getElementById("img1").src = "../img/ropa8.1.webp"
}
function cambio3() {
document.getElementById("img2").src = "../img/ropa10.2.webp";
}
function cambio4() {
document.getElementById("img2").src = "../img/ropa10.1.webp";
}
function cambio5() {
document.getElementById("img3").src = "../img/niños4.2.webp";
}
function cambio6() {
document.getElementById("img3").src = "../img/niños4.1.webp";
}
function cambio7() {
document.getElementById("img4").src = "../img/niños6.2.webp";
}
function cambio8() {
document.getElementById("img4").src = "../img/niños6.1.webp";
}
function cambio9() {
document.getElementById("img5").src = "../img/niños7.2.webp ";
}
function cambio10() {
document.getElementById("img5").src = "../img/niños7.1.webp ";
}
function cambio11() {
document.getElementById("img6").src = "../img/niño9.2.webp";
}
function cambio12() {
document.getElementById("img6").src = "../img/niño9.1.webp";
}
function cambio13() {
    document.getElementById("img7").src = "../img/niño10.2.webp";
}
function cambio14() {
    document.getElementById("img7").src = "../img/niño10.1.webp";
}
function cambio15() {
    document.getElementById("img8").src = "../img/niño11.2.webp";
}
function cambio16() {
    document.getElementById("img8").src = "../img/niño11.1.webp";
}

/**
 * * Buscador de contenido
 */
// declarando variables
bars_search = document.getElementById("contenedo-barra-busqueda");
cover_ctn_search = document.getElementById("cover-ctn-seach");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

// Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-seach").addEventListener("click", ocultar_buscador);

// funcion para mostrar el buscador
function mostrar_buscador() {
    bars_search.style.top = "50px"
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === "") {
        box_search.style.display = "none";
    }

}
// funcion para ocultar el buscardor
function ocultar_buscador() {
    bars_search.style.top = "-95px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";
}

// creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {
    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    // Recorriendo elementos a filtrar mediante los "li"
    for (i =0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === "") {
                box_search.style.display = "none";
            }
        
        }else {
            li[i].style.display = "none";
        }
    }
}