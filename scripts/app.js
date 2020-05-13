const confirmBtn = document.getElementById("confirmBtn");
const landingContainer = document.getElementById("landing-container");
const countingContainer = document.getElementById("counting-container");
const firstForm = document.getElementById("first-form-wrap");
const secondForm = document.getElementById("second-form-wrap");
const thirdForm = document.getElementById("third-form-wrap");
const firstBtn = document.getElementById("first-submit");
const h2oAmount = document.getElementById("h2oAmount");
const h2oHours = document.getElementById("h2oHours");
const totalHours = document.getElementById("totalHours");
const avgLitres = document.getElementById("avgLitres");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const countingAvg = document.getElementById("countingAvg");
const trackerAmount = document.getElementById("trackerAmount");
const h2oBtn = document.getElementById("h2oBtn");
// const amountWrap = document.getElementById("amountWrap");
// const amount = document.getElementById("amount");

let userAmount;
let userHours;
let amountPerHour;
let amountStr;
let hoursStr;
let calculator;
let calcStr;

countingContainer.style.display = "none";
secondForm.style.display = "none";
thirdForm.style.display = "none";

function returnToHome() {
  secondForm.style.display = "none";
  firstForm.style.display = "block";
}

function firstConfirm() {
  userAmount = Number(h2oAmount.value);
  userHours = Number(h2oHours.value);
  amountPerHour = userAmount / userHours;
  amountPerHour = amountPerHour.toFixed(2);
  amountStr = amountPerHour.toString();
  hoursStr = userHours.toString();
  firstForm.style.display = "none";
  secondForm.style.display = "block";
  avgLitres.textContent = amountPerHour;
  totalHours.textContent = hoursStr;
  yesBtn.addEventListener("click", changeBG);
  // noBtn.addEventListener("click", returnToHome);
}

function changeBG() {
  document.body.classList.add("counting-bg");
  landingContainer.style.display = "none";
  countingContainer.style.display = "block";
  trackH2O();
}

//need to add a timer here for the counting container (via createElement)
function trackH2O() {
  calculator = Number(0);
  calcStr = calculator.toString();
  trackerAmount.textContent = calculator;
  countingAvg.textContent = amountStr;
}

//add amountPerHour to calculator
function addH2O() {
  amountPerHour = Number(amountPerHour);
  calculator = Number(calculator)
  calculator += amountPerHour;
  // if (calculator === Number(userAmount)) {
  //   h2oBtn.disabled = true;
  // }
  trackerAmount.textContent = calculator.toFixed(2).toString();
  
}

firstBtn.addEventListener("click", firstConfirm);
h2oBtn.addEventListener("click", addH2O);

document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    addMsg();
  }
});
