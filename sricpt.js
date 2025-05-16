let viennaElement = document.querySelector("#vienna");
let viennaDateElement = viennaElement.querySelector(".date");
let viennaTimeElement = viennaElement.querySelector(".time");
let viennaTime = moment().tz("Europe/Vienna");

viennaDateElement.innerHTML = viennaTime.format("MMMM Do YYYY");
viennaTimeElement.innerHTML = viennaTime.format("h:mm:ss [<small>]A[</small>]");
