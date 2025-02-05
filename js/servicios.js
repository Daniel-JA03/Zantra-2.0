//Funcion de carrusel de banner
function carrusel() {
    //Crear arreglo de imágenes y degradados líneales para contrastar el fondo
    const imagenes=['linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url("../img/mantenimiento_1.jpg")','linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url("../img/mantenimiento_2.jpg")','linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url("../img/mantenimiento_3.jpg")','linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1)),url("../img/mantenimiento_4.jpg")']
    //Seleccionar baner
    document.querySelector('section').style.backgroundImage=imagenes[Math.floor(Math.random()*imagenes.length)];
    document.querySelector('section').style.transition="background-image 2s";
    setTimeout("carrusel()",2000);
}

//Función de rotación
document.body.setAttribute("onload","carrusel()")
    // setInterval(carrusel,2000);

//Efectos mouse over
function efecto_1(n) {
    document.getElementsByClassName("card").item(n).style.transform="scale(1.13, 1.13)";
    document.getElementsByClassName("card").item(n).style.borderColor="rgb(0, 71, 224)";
    document.getElementsByClassName("card").item(n).style.borderWidth="3px";
}

//Efectos mouse out
function efecto_2(n) {
    document.getElementsByClassName("card").item(n).style.transform="scale(1, 1)";
    document.getElementsByClassName("card").item(n).style.borderColor="gray";
    document.getElementsByClassName("card").item(n).style.borderWidth="2px";
}

