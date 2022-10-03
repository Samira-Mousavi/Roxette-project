let btnDynamic = document.getElementById("dynamic");
function changeColor() {
  let header = document.getElementById("header");
  header.classList.toggle("header-active");
}
btnDynamic.addEventListener("click", changeColor);
