// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
//TweenMax.to('.menu', 1.5, {ease: Power1.easeOut, left:0});
//TweenMax.to('.menu', 1.5, {left:350});
let clicks = 0;
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  switch (clicks === 0) {
    case true:
      clicks = 1;
      TweenMax.to(".menu", 1.5, { ease: Power1.easeOut, left: 0 });
      break;
    case false:
      clicks = 0;
      TweenMax.to(".menu", 1.5, { left: -350 });
      break;
  }
};

menuButton.addEventListener("click", () => toggleMenu());

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".addArticle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
