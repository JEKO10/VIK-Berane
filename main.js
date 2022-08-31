const menuBtn = document.querySelector(".menuBtn");
const menuBurger = document.querySelector(".menuBurger");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  menuBurger.classList.toggle("open");
  navList.classList.toggle("hide");
  document.body.classList.toggle("hidden");
});

const submit = document.querySelector("#submit");
const message = document.querySelector("#message");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  message.value = "";
});
