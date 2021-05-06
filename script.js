let button = document.querySelectorAll(".button");

let bg = document.querySelectorAll(".bg");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function () {
    console.log("test");
    bg[i-1].classList.add('hv')
  });
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseout", function () {
    console.log("test");
    bg[i-1].classList.remove('hv')
  });
}

//function addHv() {
 // document.querySelectorAll('.button').forEach((button) => bg.classList.add('hv'));
//}

//function remHv() {
 // document.querySelectorAll('.button').forEach((button) => bg.classList.remove('hv'));
//}

