'use strict';

const numerot = [];
let totuus = true;
let i = 1;

// kysytään numeroita
while (totuus) {
    let numero = Number(prompt(`Anna ${i}. numero, numero "0" lopettaa`));
    numerot.push(numero);
    i++;

    // jos numero on 0 niin silmukka loppuu
    if (numero === 0) {
        totuus = false;
    }
}

// järjestetään numerot suurimmasta pienimpään
numerot.sort((a, b) => b - a);

console.log(`Numerot suurimmasta pienimpään: ${numerot}`);

