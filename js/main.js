const nav = document.querySelector(".nav");

document.querySelector("#menu-icon").addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
  scroll();
});

function scroll() {
  if (nav.style.display == "block") {
    document.querySelector("body").style.overflow = "hidden";
    return;
  }
  document.querySelector("body").style.overflow = "visible";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    nav.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  }
});
