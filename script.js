let button = document.querySelector(".button");

let bg = document.querySelector(".bg");

function addHv() {
  bg.classList.add("hv");
}

function remHv() {
  bg.classList.remove("hv");
}

button.addEventListener("mouseover", function () {
  addHv();
});

button.addEventListener("mouseout", function (){
  remHv();
})