'use strict';

let str_numero1 = prompt('Anna ensimmäinen numero: ')
let str_numero2 = prompt('Anna toinen numero: ')
let str_numero3 = prompt('Anna kolmas numero: ')

let numero1 = parseInt(str_numero1)
let numero2 = parseInt(str_numero2)
let numero3 = parseInt(str_numero3)

//Summa
document.querySelector('#summa').innerHTML =
    `Numeroiden summa = ${numero1 + numero2 + numero3}`
//Kertolasku
document.querySelector('#tulo').innerHTML =
    `Numeroiden tulo = ${numero1 * numero2 * numero3}`
//Keskiarvo
document.querySelector('#keskiarvo').innerHTML =
    `Numeroiden keskiarvo = ${(numero1 + numero2 + numero3) / 3}`

