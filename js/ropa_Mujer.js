function cambio1() {
    document.getElementById("img1").src = "../img/mujer1.2.webp";
}
function cambio2() {
    document.getElementById("img1").src = "../img/mujer1.1.webp";
}
function cambio3() {
    document.getElementById("img2").src = "../img/mujer2.2.webp";
}
function cambio4() {
    document.getElementById("img2").src = "../img/mujer2.1.webp";
}
function cambio5() {
    document.getElementById("img3").src = "../img/mujer3.2.webp";
}
function cambio6() {
    document.getElementById("img3").src = "../img/mujer3.1.webp";
}
function cambio7() {
    document.getElementById("img4").src = "../img/mujer4.2.webp";
}
function cambio8() {
    document.getElementById("img4").src = "../img/mujer4.webp";
}
function cambio9() {
    document.getElementById("img5").src = "../img/mujer6.2.jpg";
}
function cambio10() {
    document.getElementById("img5").src = "../img/mujer6.1.jpg";
}
function cambio11() {
    document.getElementById("img6").src = "../img/mujer7.2.avif";
}
function cambio12() {
    document.getElementById("img6").src = "../img/mujer7.1.avif";
}
function cambio13() {
    document.getElementById("img7").src = "../img/ropa9.2.avif"
}
function cambio14() {
    document.getElementById("img7").src = "../img/ropa9.1.avif"
}
function cambio15() {
    document.getElementById("img8").src = "../img/mujer92.avif"
}
function cambio16() {
    document.getElementById("img8").src = "../img/mujer9.1.avif"
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