'use strict';

//funktio
function noppa(sivut) {
  return Math.floor(Math.random() * sivut) + 1;
}

const sivut = 12; //kovakoodataan nopan sivujen määrä haluamma määrä!
let tulos = 0;

while (tulos !== sivut) {
    tulos = noppa(sivut);
    document.querySelector('#target').innerHTML += `<li>${tulos}</li>`;
}