import loadingScreen from "./loadingScreen.js";
import checkPhoneAndCode from "./validateData.js";

const codeDiv = document.querySelector(".phoneAndCode");
const myButton = document.querySelector("#myButton");
const myModal = document.querySelector("#myModal");
const modalContent = document.querySelector(".modal-content");

// to count how many seconds it took
let startDate;

// "Odbierz paczkę" button
function handleButton() {
  if (!codeDiv.style.display || codeDiv.style.display === "none") {
    codeDiv.style.display = "flex";
    startDate = new Date();
  } else {
    if (checkPhoneAndCode()) {
      loadingScreen(startDate);
    }
  }
}

myButton.addEventListener("click", handleButton);
document.querySelector("#stepZero").addEventListener("click", stepZero);
document.querySelector("#stepOne").addEventListener("click", stepOne);
document.querySelector(".close").addEventListener("click", restart);

// after success buttons
function restart() {
  document.querySelector("#phoneNumber").value = "";
  document.querySelector("#code").value = "";
  myModal.style.display = "none";
  modalContent.style.display = "none";
}

function stepZero() {
  restart();
  codeDiv.style.display = "none";
}

function stepOne() {
  restart();
  startDate = new Date();
}
