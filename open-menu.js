$(document).ready(function () {
    //Menu button on click event
    $('.menu-button').on('click', function() {
      //console.log("funciono");
      // Toggles a class that slides the menu into view on the screen
      $('.menu-mobile').toggleClass('menu-mobile--open');
      return false;
    }); 

    $('.close-menu').on('click', function() {
      //console.log("funciono");
      // Toggles a class that slides the menu into view on the screen
      $('.menu-mobile').toggleClass('menu-mobile--open');
      return false;
    }); 
  });




