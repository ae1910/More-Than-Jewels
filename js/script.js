function openNav() {
  document.querySelector("nav").style.transform = "translateX(0)";
  document.querySelector("nav").style.boxShadow  = "0 0 0 10000px rgba(0,0,0,.50)";
}

function closeNav() {
  document.querySelector("nav").style.transform = "translateX(-100%)";
  document.querySelector("nav").style.boxShadow  = "none";
}