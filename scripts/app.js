const confirmBtn = document.getElementById("confirmBtn"),
  landingContainer = document.getElementById("landing-container"),
  countingContainer = document.getElementById("counting-container"),
  firstForm = document.getElementById("first-form-wrap"),
  secondForm = document.getElementById("second-form-wrap"),
  thirdForm = document.getElementById("third-form-wrap"),
  firstBtn = document.getElementById("first-submit"),
  h2oAmount = document.getElementById("h2oAmount"),
  h2oHours = document.getElementById("h2oHours"),
  totalHours = document.getElementById("totalHours"),
  avgLitres = document.getElementById("avgLitres"),
  yesBtn = document.getElementById("yesBtn"),
  noBtn = document.getElementById("noBtn"),
  countingAvg = document.getElementById("countingAvg"),
  trackerAmount = document.getElementById("trackerAmount"),
  h2oBtn = document.getElementById("h2oBtn"),
  clock = document.getElementById("clock"),
  hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds");

let userAmount,
  userHours,
  amountPerHour,
  amountStr,
  hoursStr,
  calculator,
  calcStr,
  clearingVar,
  totalSec = 0;

countingContainer.style.display = "none";
secondForm.style.display = "none";
thirdForm.style.display = "none";

function returnToHome() {
  secondForm.style.display = "none";
  firstForm.style.display = "block";
  h2oAmount.focus();
  h2oAmount.value = "";
  h2oHours.value = "";
}

function firstConfirm() {
  amountPerHour = userAmount / userHours;
  amountPerHour = amountPerHour.toFixed(2);
  amountStr = amountPerHour.toString();
  hoursStr = userHours.toString();
  firstForm.style.display = "none";
  secondForm.style.display = "block";
  avgLitres.textContent = amountPerHour;
  totalHours.textContent = hoursStr;
  yesBtn.addEventListener("click", changeBG);
  noBtn.addEventListener("click", returnToHome);
}

function changeBG() {
  document.body.classList.add("counting-bg");
  landingContainer.style.display = "none";
  countingContainer.style.display = "block";
  trackH2O();
  clearingVar = setInterval(clocker, 1000);
}

function clocker() {
  ++totalSec;
  let h = Math.floor(totalSec / 3600);
  let m = Math.floor((totalSec - h * 3600) / 60);
  let s = totalSec - (h * 3600 + m * 60);
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  clock.textContent = `${h} : ${m} : ${s}`;
  if (Math.floor(userHours * 3600) == totalSec) {
    clearInterval(clearingVar);
    clock.textContent = "Time's Up";
  }
}

function trackH2O() {
  calculator = Number(0);
  calcStr = calculator.toString();
  trackerAmount.textContent = calculator;
  countingAvg.textContent = amountStr;
}

function addH2O() {
  amountPerHour = Number(amountPerHour);
  calculator = Number(calculator);
  calculator += amountPerHour;
  trackerAmount.textContent = calculator.toFixed(2).toString();
}

firstBtn.addEventListener("click", function () {
  userAmount = Number(h2oAmount.value);
  userHours = Number(h2oHours.value);
  if (userAmount <= 0 || userHours <= 0) {
    returnToHome();
    h2oAmount.focus();
    h2oAmount.value = "";
    h2oHours.value = "";
  } else {
    firstConfirm();
  }
});

h2oBtn.addEventListener("click", addH2O);

document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});
