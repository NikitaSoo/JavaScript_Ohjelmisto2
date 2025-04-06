'use strict';

let participants = []

//kysytään määrä:
let participants_amount =
    Number(prompt('Anna osallistujien määrä: '))

//sitten kysytään osallisutjien nimet:
for (let i = 0; i < participants_amount; i++) {
    let nimi = prompt('Anna osallitujan nimi: ')
    participants.push(nimi);
}

//Järjestetään aakkosjärjestyksessä ja käydään järjestetty lista läpi
participants.sort();

for (let nimet of participants) {
  document.querySelector('#target').innerHTML += `<li>${nimet}</li>`;
}