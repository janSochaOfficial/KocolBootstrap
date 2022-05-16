const butColOne = document.querySelector(".col1");
const butColTwo = document.querySelector(".col2");
const butColThree = document.querySelector(".col3");
const butColFour = document.querySelector(".col4");
const butColSix = document.querySelector(".col6");
const butColTwelve = document.querySelector(".col12");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const three = document.querySelectorAll(".three");
const four = document.querySelectorAll(".four");
const six = document.querySelectorAll(".six");
const twelve = document.querySelector(".twelve");
const sztuczny = document.querySelectorAll(".sztuczny");
butColOne.addEventListener("click", function () {
  one.forEach((element) => {
    element.classList.toggle("active");
  });
});

butColTwo.addEventListener("click", function () {
  two.forEach((element) => {
    element.classList.toggle("active");
  });
});

butColThree.addEventListener("click", function () {
  three.forEach((element) => {
    element.classList.toggle("active");
  });
});

butColFour.addEventListener("click", function () {
  four.forEach((element) => {
    element.classList.toggle("active");
  });
});

butColSix.addEventListener("click", function () {
  six.forEach((element) => {
    element.classList.toggle("active");

    sztuczny.forEach((element) => {
      element.classList.toggle("sztuczny");
    });
  });
});
butColTwelve.addEventListener("click", function () {
  twelve.classList.toggle("active");
});
