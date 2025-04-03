'use strict';

//syöte
const nopat = Number(prompt('Anna noppien määrä: '))

let summa = 0;

for (let i = 0;
     i < nopat;
     i++) {
    //nopasta voidaan saada arvot 1-6
    let roll = Math.floor(Math.random() * 6) + 1;
    summa += roll;
}

document.querySelector('#target').innerHTML =
    `Noppien summasi on ${summa}`