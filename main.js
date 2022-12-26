function tocaSom(idElementoAudio) {

   document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];

   const intrumento = tecla.classList[1];

   const idAudio = `#som_${intrumento}`

   tecla.onclick = function() {
      tocaSom(idAudio);
   };

}


