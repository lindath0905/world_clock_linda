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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
