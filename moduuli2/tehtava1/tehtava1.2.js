'use strict';

let numerot = []

//pyydetään viisi numeroa käyttäjältä:
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt('Anna numero: '));
    numerot.push(numero);
}
//katsotaan lista mielenkiinnosta
console.log(numerot)

//tulostetaan ne käänteisessä järjestyksessä:
console.log('Numerot käänteisessä järjestyksessä: ')

for (let i = numerot.length - 1;
     i >= 0;
     i--) {
    console.log(numerot[i]);
}