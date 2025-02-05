//Scroll Menu-------------------
var prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
        var currentScrollPos = window.pageYOffset;
        var header = document.getElementById("header");

        if (prevScrollPos > currentScrollPos) {
            // El scroll está subiendo
            header.classList.remove("ocultar");
        } else {
            // El scroll está bajando
            header.classList.add("ocultar");
        }

        if (currentScrollPos === 0) {
            header.style.backgroundColor = "transparent";
        } else {
            header.style.backgroundColor = "rgba(128, 128, 128, 0.788)";
        }

        prevScrollPos = currentScrollPos;
    });


//VIDEO CONTROL
var video = document.getElementById('videoPrincipal');

video.addEventListener('mouseover', function() {
  video.controls = true;
});

video.addEventListener('mouseout', function() {
  video.controls = false;
});

//ULTIMO VIDEO CONTROL
var video2 = document.getElementById('videoPrincipal2');

video2.addEventListener('mouseover', function() {
  video2.controls = true;
});

video2.addEventListener('mouseout', function() {
  video2.controls = false;
});




/*CAMBIO CARRUSEL*/
document.addEventListener("DOMContentLoaded", function () {
  const imageItems = document.querySelectorAll('.img-1, .img-2, .img-3, .img-4');
  const carousel = document.querySelector('.carrusel');
  const cards = document.querySelectorAll('.card');

  for (let i = 0; i < imageItems.length; i++) {
      imageItems[i].addEventListener('click', function () {
          // Elimina la clase 'active' de todas las tarjetas
          for (let j = 0; j < cards.length; j++) {
              cards[j].classList.remove('active');
          }

          // Añade la clase 'active' a la tarjeta correspondiente
          cards[i].classList.add('active');

          // Calcula la distancia para mover el carrusel
          const distanceToMove = i * -25;
          carousel.style.transform = `translateX(${distanceToMove}%)`;
      });
  }
});





/* ---------------TABLA ---------------- */

document.addEventListener("DOMContentLoaded", function () {
  const mas = document.querySelector(".menos");
  const menos = document.querySelector(".mas");
  const section3 = document.querySelector(".tabla");

  mas.addEventListener("click", function () {
    section3.style.height = "auto";
    mas.style.zIndex = "0";
    menos.style.zIndex = "2";
  });

  menos.addEventListener("click", function () {
    section3.style.height = "0";
    mas.style.zIndex = "2";
    menos.style.zIndex = "0";
  });
});



