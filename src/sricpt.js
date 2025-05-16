function updateTime() {
  let viennaElement = document.querySelector("#vienna");
  if (viennaElement) {
    let viennaDateElement = viennaElement.querySelector(".date");
    let viennaTimeElement = viennaElement.querySelector(".time");
    let viennaTime = moment().tz("Europe/Vienna");

    viennaDateElement.innerHTML = viennaTime.format("MMMM Do YYYY");
    viennaTimeElement.innerHTML = viennaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");

    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
