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


// ------ Fun Box Java ----- 

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const header = document.querySelector(".box-h5");
const box = document.querySelector(".box");

header.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragEnd);
document.addEventListener("mousemove", drag);

// Check if the position is saved in sessionStorage
if (sessionStorage.getItem("boxX") && sessionStorage.getItem("boxY")) {
  xOffset = parseInt(sessionStorage.getItem("boxX"));
  yOffset = parseInt(sessionStorage.getItem("boxY"));
  setTranslate(xOffset, yOffset, box);
  box.style.visibility = "visible";
  header.style.visibility = "visible";
} else {
  box.style.visibility = "hidden";
  header.style.visibility = "hidden";

}

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === header) {
    isDragging = true;
    box.style.visibility = "visible";
  }
}

function dragEnd(e) {
  isDragging = false;
  sessionStorage.setItem("boxX", xOffset);
  sessionStorage.setItem("boxY", yOffset);
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    // Check bounds
    if (currentX < 0) {
      currentX = 0;
    }
    if (currentY < 0) {
      currentY = 0;
    }
    if (currentX + box.offsetWidth > window.innerWidth) {
      currentX = window.innerWidth - box.offsetWidth;
    }
    if (currentY + box.offsetHeight > window.innerHeight) {
      currentY = window.innerHeight - box.offsetHeight;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, box);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  el.style.visibility = "visible";
}
