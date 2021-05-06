document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('mouseover', handler);
    button.addEventListener('mouseout', handler);
});

document.querySelectorAll('.bg').forEach((bg) => {
    bg.addEventListener('mouseover', handler);
    bg.addEventListener('mouseout', handler);
});

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