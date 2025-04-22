'use strict';

const target = document.getElementById('target');

//luodaan kolme <li> elemnttiä käyttäen createElement
const eka = document.createElement('li');
const teksti1 = document.createTextNode('First item');
eka.appendChild(teksti1);

const toka = document.createElement('li');
const teksti2 = document.createTextNode('Second item');
toka.appendChild(teksti2);
//Ja muistetaan lisätä tänne css tyyli
toka.classList.add('my-item');


const kolmas = document.createElement('li');
const teksti3 = document.createTextNode('Third item');
kolmas.appendChild(teksti3);

target.appendChild(eka);
target.appendChild(toka);
target.appendChild(kolmas);
