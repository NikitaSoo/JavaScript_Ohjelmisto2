'use strict';

let nimi = prompt('Anna nimesi niin katsotaan mihin hattu arpoo sinut: ')
let wizardry = Math.floor(Math.random() * 4 + 1);
let tylypahka;

if (wizardry === 1) {
    tylypahka = 'Gryffindor'
}
else if (wizardry === 2) {
    tylypahka = 'Slytherin'
}
else if (wizardry === 3) {
    tylypahka = 'Hufflepuff'
}
else if (wizardry === 4) {
    tylypahka = 'Ravenclaw'
}

document.querySelector('#valinta').innerHTML =
    `${nimi}, taikahattu on valinnut sinut (${tylypahka}) nimiseen tylypahkaan`

