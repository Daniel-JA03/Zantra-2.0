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

//* cambio de imagenes de contenido Educativo

function cambio1() {
document.getElementById("img1").src = "../img/polo1.2.avif";
}
function cambio2() {
document.getElementById("img1").src = "../img/polo1.avif"
}
function cambio3() {
document.getElementById("img2").src = "../img/ropa2.2.avif";
}
function cambio4() {
document.getElementById("img2").src = "../img/ropa2.avif";
}
function cambio5() {
document.getElementById("img3").src = "../img/ropa3.2.avif";
}
function cambio6() {
document.getElementById("img3").src = "../img/ropa3.1.avif";
}
function cambio7() {
document.getElementById("img4").src = "../img/ropa4.2.avif";
}
function cambio8() {
document.getElementById("img4").src = "../img/ropa4.1.avif";
}
function cambio9() {
document.getElementById("img5").src = "../img/ropa5.2.webp";
}
function cambio10() {
document.getElementById("img5").src = "../img/ropa5.1.webp";
}
function cambio11() {
document.getElementById("img6").src = "../img/ropa6.2.avif";
}
function cambio12() {
document.getElementById("img6").src = "../img/ropa6.1.avif";
}
function cambio13() {
document.getElementById("img7").src = "../img/ropa8.2.webp";
}
function cambio14() {
document.getElementById("img7").src = "../img/ropa8.1.webp";
}
function cambio15() {
document.getElementById("img8").src = "../img/ropa9.2.avif";
}
function cambio16() {
document.getElementById("img8").src = "../img/ropa9.1.avif";
}
function cambio17() {
document.getElementById("img9").src = "../img/ropa10.2.webp";
}
function cambio18() {
document.getElementById("img9").src = "../img/ropa10.1.webp";
}
function cambio19() {
document.getElementById("img10").src = "../img/ropa11.2.webp";
}
function cambio20() {
document.getElementById("img10").src = "../img/ropa11.webp";
}
function cambio21() {
document.getElementById("img11").src = "../img/ropa12.2.avif";
}
function cambio22() {
document.getElementById("img11").src = "../img/ropa12.1.avif";
}
function cambio23() {
    document.getElementById("img12").src = "../img/camiseta2.2.avif";
}
function cambio24() {
    document.getElementById("img12").src = "../img/camiseta2.1.avif";
}
function cambio25() {
    document.getElementById("img13").src = "../img/camiseta3.2.jpg";
}
function cambio26() {
    document.getElementById("img13").src = "../img/camiseta3.1.jpg";
}
function cambio27() {
    document.getElementById("img14").src = "../img/camisa3.2.webp";
}
function cambio28() {
    document.getElementById("img14").src = "../img/camisa3.1.webp";
}
function cambio29() {
    document.getElementById("img15").src = "../img/camisa2.2.webp";
}
function cambio30() {
    document.getElementById("img15").src = "../img/camisa2.1.webp";
}
function cambio31() {
    document.getElementById("img16").src = "../img/polera2.2.webp";
}
function cambio32() {
    document.getElementById("img16").src = "../img/polera2.1.webp";
}
function cambio33() {
    document.getElementById("img17").src = "../img/polera3.2.webp";
}
function cambio34() {
    document.getElementById("img17").src = "../img/polera3.1.webp";
}
function cambio35() {
    document.getElementById("img18").src = "../img/polera4.2.webp";
}
function cambio36() {
    document.getElementById("img18").src = "../img/polera4.1.webp";
}
function cambio37() {
    document.getElementById("img19").src = "../img/polera6.2.webp";
}
function cambio38() {
    document.getElementById("img19").src = "../img/polera6.1.webp";
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