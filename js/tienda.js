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


// lo mas vendido
const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    
    
    // slide images according to the slidebutton clicksaz
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft  ? "none" : "block";
    }

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });
}

window.addEventListener("load", initSlider);

// buscador de contenido
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
