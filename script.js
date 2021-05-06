let button = document.querySelector(".button");

let bg = document.querySelector(".bg");

function addHv() {
  bg.classList.add("hv");
}

function remHv() {
  bg.classList.remove("hv");
}

document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('mouseover', addHv);
    button.addEventListener('mouseout', remHv);
});

document.querySelectorAll('.bg').forEach((bg) => {
    bg.addEventListener('mouseover', addHv);
    bg.addEventListener('mouseout', remHv);
});