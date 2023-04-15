// strength section js starts here
window.addEventListener("scroll", startCounter);
let flag = true;

function startCounter() {
  var box = document.querySelector(".box");
  var boxPosition = box.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  let exp = document.querySelector(".exp");
  let rating = document.querySelector(".rating");
  let student = document.querySelector(".student");

  if (boxPosition < windowHeight && flag) {
    flag = false;
    let exp_count = 0;
    let rating_counter = 0;
    let student_counter = 0;

    let expInterval = setInterval(function () {
      exp.textContent = exp_count;
      exp_count++;

      if (exp_count > 15) {
        clearInterval(expInterval);
      }
    }, 80);
    let ratingInterval = setInterval(function () {
      rating.textContent = rating_counter;
      rating_counter = rating_counter + 1;

      if (rating_counter > 4) {
        clearInterval(ratingInterval);
      }
    }, 100);
    let studentInterval = setInterval(function () {
      student.textContent = student_counter;
      student_counter += 2;

      if (student_counter > 1000) {
        clearInterval(studentInterval);
      }
    }, 1);
  }
}

// js for nav clicking feature

let getnavicon = document.querySelector(".right-nav-op>span");
let getmainnav = document.querySelector(".right-nav");
let getcloseicon = document.querySelector(".close-icon");

getnavicon.onclick = () => {
  getmainnav.classList.toggle("clicknavicon");
};

getcloseicon.onclick = () => {
  getmainnav.classList.remove("clicknavicon");
};
