'use strict';

let vuosi = Number(prompt('Anna vuosi: '))
let karkausvuosi;

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    karkausvuosi = `Vuosi ${vuosi} on karkausvuosi`
}
else {
    karkausvuosi = `Vuosi ${vuosi} ei ole karkausvuosi`
}

document.querySelector('#target').innerHTML =
    `${karkausvuosi}`