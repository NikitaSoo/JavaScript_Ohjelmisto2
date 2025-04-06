'use strict';

const nimet = ['Johnny', 'DeeDee', 'Joey', 'Marky']

function concat(lista) {
    let tulos = '';
    for (let i of lista) {
        tulos += i;
    }
    return tulos;
}

document.querySelector('#target').innerHTML = concat(nimet)