function tocaSom(seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
         elemento.play();
   } else {
      alert('Elemento não encontrado');
   }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];

   const intrumento = tecla.classList[1];

   const idAudio = `#som_${intrumento}`

   tecla.onclick = function() {
      tocaSom(idAudio);
   };

   tecla.onkeydown = function(evento) {
      if (evento.code === 'Space' || evento.code === 'Enter') {
         tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function() {
      tecla.classList.remove('ativa')
   }

}


