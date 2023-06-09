const leftBar = document.querySelector(".left");
const rightBar = document.querySelector(".right");

const mainBar = document.querySelector(".mainCenter");

const leftBarBtn = document.querySelector("#leftBarBtn");
const rightBarBtn = document.querySelector("#rightBarBtn");

leftBarBtn.addEventListener('click', () => {

  if (leftBar.classList.contains('openBar')) {
    leftBar.classList.remove('openBar');
    mainBar.classList.remove('openLeftBar');
  } else {
    leftBar.classList.toggle('openBar');
    mainBar.classList.toggle('openLeftBar');
  }

});

rightBarBtn.addEventListener('click', () => {

  if (rightBar.classList.contains('openBar')) {
    rightBar.classList.remove('openBar');
    mainBar.classList.remove('openRightBar');
  } else {
    rightBar.classList.toggle('openBar');
    mainBar.classList.toggle('openRightBar');
  }

});