'use strict';

const koirat = []

//tehdään looppi
for (let i = 1; i <= 6; i++) {
    let koira = prompt(`Anna ${i} koiran nimi: `)
    koirat.push(koira)
}

//järjestetään koirat
koirat.reverse()

//käydään lista läpi
for (let nimet of koirat) {
  document.querySelector('#target').innerHTML += `<li>${nimet}</li>`;
}