// Subject list click
let subList = document.querySelector(".subjects");
let subjectsList = document.querySelector(".subjects-list");

subList.addEventListener("click", function (event) {
  event.preventDefault();
  //   subjectsList.classList.toggle("subjects-list-java");

  //   if (subjectsList.style.display == "none") {
  //     subjectsList.style.display = "block";
  //   } else {
  //     subjectsList.style.display = "none";
  //   }
  classOnOff(subjectsList, "subjects-list-java");
});

function classOnOff(firstClass, secondClass) {
  firstClass.classList.toggle(secondClass);
}

// web design click

let webDesign = document.querySelector(".web-design");
let webList = document.querySelector(".web-list");

webDesign.addEventListener("click", function (event) {
  event.preventDefault();
  //   webList.classList.toggle("web-list-java");
  classOnOff(webList, "web-list-java");
});

// Blog click

let blog = document.querySelector(".blog");
let blogList = document.querySelector(".blog-list");

blog.addEventListener("click", function (event) {
  event.preventDefault();
  //   blog.classList.toggle("blog-list-java");
  classOnOff(blogList, "blog-list-java");
});

// Navbar click

let navBar = document.querySelector(".nav-bar");
let navMenu = document.querySelector(".main-menu");

navBar.addEventListener("click", function (event) {
  event.preventDefault();
  //   blog.classList.toggle("blog-list-java");
  classOnOff(navMenu, "main-menu-java");
  console.log("hey");
});

("use strict");
// images
let img = document.getElementById("img");
let contentPa = document.getElementById("content-para");
let contentHe = document.getElementById("content-head");
let carouselList = document.querySelectorAll(".carousel-list1");
let carouselList1 = document.querySelector("#carousel-click1");
let carouselList2 = document.querySelector("#carousel-click2");
let carouselList3 = document.querySelector("#carousel-click3");
let imageObj = [
  {
    num: 0,
    contentPara: "BEST ONLINE COURSES",
    contentHead: "Best Education From Your Home",
    im: "img/carousel-1.jpg",
  },
  {
    num: 1,
    contentPara: "BEST ONLINE COURSES",
    contentHead: "Best Online Learning Platform",
    im: "img/carousel-2.jpg",
  },
  {
    num: 2,
    contentPara: "BEST ONLINE COURSES",
    contentHead: "New Way To Learn From Home",
    im: "img/carousel-3.jpg",
  },
];

setInterval(imageChange, 3000);
// function imageInterval() {
//   setInterval(imageChange, 5000);
// }
document.addEventListener("DOMContentLoaded", function () {
  carouselList[0].style.backgroundColor = "#ff6600";
  contentHe.textContent = imageObj[0].contentHead;
  img.src = imageObj[0].im;
});

let i = 0;

function imageChange() {
  let j = imageObj.length;

  if (i < j) {
    carouselList[i].style.backgroundColor = "#ff6600";
    contentHe.textContent = imageObj[i].contentHead;
    img.src = imageObj[i].im;

    for (k = 0; k < j; k++) {
      if (k !== i) {
        carouselList[k].style.backgroundColor = "#44425a";
      }
    }

    i++;
  } else {
    i = 0;
  }
}

// Image on click
("use strict");
carouselList1.addEventListener("click", function () {
  i = 0;
  imageChange();
});

carouselList2.addEventListener("click", function () {
  i = 1;
  imageChange();
});

carouselList3.addEventListener("click", function () {
  i = 2;
  imageChange();
});

// Testmoinal

let testImg = document.getElementById("test-img");
let testSym = document.getElementById("test-sym");
let testCont = document.getElementById("test-cont");
let testClient = document.getElementById("test-client");
let testProf = document.getElementById("test-prof");
let testList = document.querySelectorAll(".test-carousel-list1");
let testList1 = document.querySelector("#test-carousel-click1");
let testList2 = document.querySelector("#test-carousel-click2");
let testList3 = document.querySelector("#test-carousel-click3");

let divTrans = document.getElementById("testmonial-container");
let testObj = [
  {
    num: 0,
    im: "img/testimonial-1.jpg",

    testCon:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tempore reprehenderit itaque optio dolores rerum quia voluptates ipsam labore perspiciatis!",
    testClien: "Client Name",
    testPro: "Preffesion",
  },
  {
    num: 0,
    im: "img/testimonial-2.jpg",

    testCon:
      "Lorem ipsum  sit amet consectetur adipisicing elit. Facilis tempore reprehenderit itaque optio dolores rerum quia voluptates ipsam labore perspiciatis!",
    testClien: "Client Name",
    testPro: "Preffesion",
  },
  {
    num: 0,
    im: "img/testimonial-3.jpg",

    testCon:
      "Lorem  dolor sit amet consectetur adipisicing elit. Facilis tempore reprehenderit itaque optio dolores rerum quia voluptates ipsam labore perspiciatis!",
    testClien: "Client Name",
    testPro: "Preffesion",
  },
];

setInterval(testimageChange, 3000);
// function imageInterval() {
//   setInterval(imageChange, 5000);
// }
document.addEventListener("DOMContentLoaded", function () {
  testList[0].style.backgroundColor = "black";
  testCont.textContent = testObj[0].testCon;
  testImg.src = testObj[0].im;
});

let f = 0;

function testimageChange() {
  let j = testObj.length;

  if (f < j) {
    testList[f].style.backgroundColor = "black";
    testCont.textContent = testObj[f].testCon;
    testImg.src = testObj[f].im;
    divTrans.style.transition = "0.3s";

    for (k = 0; k < j; k++) {
      if (k !== f) {
        testList[k].style.backgroundColor = "#ff6600";
      }
    }

    f++;
  } else {
    f = 0;
  }
}

// Image on click
("use strict");
testList1.addEventListener("click", function () {
  f = 0;
  testimageChange();
});

testList2.addEventListener("click", function () {
  f = 1;
  testimageChange();
});

testList3.addEventListener("click", function () {
  f = 2;
  testimageChange();
});
