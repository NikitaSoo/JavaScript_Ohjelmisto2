'use strict';

//funktio
function noppa() {
  return Math.floor(Math.random() * 6) + 1;
}

let tulos = 0;

while (tulos !== 6) {
    tulos = noppa();
    document.querySelector('#target').innerHTML += `<li>${tulos}</li>`;
}