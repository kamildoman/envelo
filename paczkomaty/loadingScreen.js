export default function loadingScreen(startDate) {
  document.querySelector("#myModal").style.display = "flex";
  var spinner = document.querySelector(".loader");
  spinner.style.display = "block";
  spinner.classList.add("spin");

  function loading() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
  }

  function success() {
    let stopDate = new Date();
    let timeDiff = stopDate - startDate;
    timeDiff /= 1000;
    let seconds = Math.round(timeDiff);
    document.querySelector("#seconds").innerHTML = seconds;
    document.querySelector(".modal-content").style.display = "block";
  }

  loading().then(function (result) {
    spinner.classList.remove("spin");
    spinner.style.display = "none";
    success();
  });
}
