let menuicom = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicom.onclick = () => {
    menuicom.classList.toggle('bx-x')
    navbar.classList.toggle('active')
    
}
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
    function toggleList(clickedCard) {
      const cards = document.querySelectorAll('.service-card');

      cards.forEach(card => {
        if (card !== clickedCard) {
          card.classList.remove('active');
        }
      });

      clickedCard.classList.toggle('active');
    }


  const filterButtons = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Active button
      document.querySelector(".filter.active").classList.remove("active");
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projects.forEach(project => {
        if (filterValue === "all" || project.dataset.category === filterValue) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });

