'use strict';

const numerot = []
let totuus = true;

//kysytään numeroita
while (totuus) {
    let numero =
        Number(prompt('Anna numero, jos annat saman numerot ohjelma loppuu'));

    if (numerot.includes(numero)) {
        console.log(`Numero ${numero} on jo syötetty aiemmin`);
        break;
    }

    //lisätään numero taulukkoon
    numerot.push(numero)
}

//järjestetään vielä numerot:
numerot.sort((a,b) => a - b);

console.log(`Syötetyt numerot ${numerot}`)