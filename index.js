const changeBtn = document.querySelector("button");
showSection(0);

changeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  changeBtn.classList.toggle("dark-mode");
});

function showSection(sectionNumber) {
  var sections = document.getElementsByClassName('section');
  
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active');
  }
  if (sectionNumber == 0) {
    document.getElementById('section' + sectionNumber).classList.add('active');
  }
  if (sectionNumber > 0) {
    document.getElementById('section' + sectionNumber).classList.add('active');
  }
}