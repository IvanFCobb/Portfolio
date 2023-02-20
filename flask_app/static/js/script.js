// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-60px";
//     }
//     prevScrollpos = currentScrollPos;
// }

$(document).ready(function() {
    // Collapse the navbar when a link is clicked
    $(".navbar-nav a").click(function() {
      $(".navbar-collapse").collapse("hide");
    });
  });