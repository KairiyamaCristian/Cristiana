const changeBtn = document.querySelector("button");

changeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  changeBtn.classList.toggle("dark-mode");
});