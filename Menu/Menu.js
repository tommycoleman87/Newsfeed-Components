
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
let menuHeight = menu.style.height;
let body = document.querySelector('body');

menuButton.addEventListener('click', () => {
  if(menu.style.height === '0px') {
  TweenMax.to('.menu', 1, {height:1000})
  TweenMax.to('.menu ul li', 1, {fontSize:32})
  TweenMax.to('.menu ul li', 1, {padding:30})
  } else {
    TweenMax.to('.menu', 1, {height:0})
    TweenMax.to('.menu ul li', .75, {fontSize:0})
    TweenMax.to('.menu ul li', .75, {padding:0})
  }
});




