'use strict';

let startYear = prompt("Enter the start year:");
let endYear = prompt("Enter the end year:");

startYear = Number(startYear);
endYear = Number(endYear);

let leapYears = "<ul>";

for (let year = startYear;
     year <= endYear;
     year++) {

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    leapYears += `<li>${year}</li>`;
  }
}

leapYears += "</ul>";

document.querySelector('#target').innerHTML = leapYears;
