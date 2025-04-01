'use strict';

const vastaus = confirm('Should I calculate the square root?')

//tarkistetaanko on OK
if (vastaus) {
    let numero = prompt('Anna numero niin lasken neliöjuuren: ')
    numero = Number(numero)

//katsotaan onko numero suurempi kuin 0 ja jos on nii tulostetaan neliöjuuri
    if (numero < 0) {
        document.querySelector('#target').innerHTML =
            'En voi laskea negatiivista neliöjuurta'
    } else if (numero > 0) {
        let sqrt = Math.sqrt(numero)
        document.querySelector('#target').innerHTML =
            `Numeron (${numero}) neliöjuuri on (${sqrt})`
    }
}
else {
  document.querySelector('#target').innerHTML =
      'The square root is not calculated.';
}
