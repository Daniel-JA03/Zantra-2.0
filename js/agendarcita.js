//Funcion de carrusel de banner
function carrusel() {
    //Crear arreglo de imágenes y degradados líneales para contrastar el fondo
    const imagenes=['linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url("../img/agendar_cita/baner1.jpg")','linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url("../img/agendar_cita/baner2.jpg")','linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url("../img/agendar_cita/baner3.jpg")']
    //Seleccionar baner
    document.querySelector('section').style.backgroundImage=imagenes[Math.floor(Math.random()*imagenes.length)];
    document.querySelector('section').style.transition="background-image 2s";
    setTimeout("carrusel()",2000);
}

//Función de rotación
document.body.setAttribute("onload","carrusel()")
    // setInterval(carrusel,2000);
