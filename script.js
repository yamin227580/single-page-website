let menuItemTab = document.querySelectorAll(".menuItem");
let slider = document.querySelector(".slider");
let text = document.querySelector(".text");
let pText = document.querySelector(".pText");
let btn = document.querySelector(".btn");
let textGroup = document.querySelector(".textGroup");
let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let certiText = document.querySelector(".certiText");
let btnCerti = document.querySelector(".btnCerti");
let projectContainer = document.querySelector(".projectContainer");
let homeDiv = document.querySelector(".homeDiv");
let projectDiv = document.querySelector(".projectP");
let serviceDiv = document.querySelector(".service");
let pic1 = document.querySelectorAll(".img0");
let aboutDiv = document.querySelector(".About");
let counter = document.querySelector(".counter");
let counter1 = document.querySelector(".counter1");
let countParent = document.querySelector(".countParent");
let contactDiv = document.querySelector(".contact");

let i = 0;
let intervalId;
let j = 0;
let intervalId2;

const myFunction = () => {
  i += 1;
  counter.textContent = i;

  if (i === 30) {
    i = 0;
    clearInterval(intervalId);
    return;
  }
};

const myFunction2 = () => {
  j += 1;
  counter1.textContent = j;

  if (j === 20) {
    j = 0;
    clearInterval(intervalId2);
    return;
  }
};

countParent.addEventListener("mouseover", () => {
  intervalId = setInterval(myFunction, 100);
  intervalId2 = setInterval(myFunction2, 100);
});

countParent.addEventListener("mouseout", () => {
  clearInterval(intervalId);
  clearInterval(intervalId2);
  if (i < 30) {
    counter.textContent = 30;
  }
  if (j < 20) {
    counter1.textContent = 20;
  }
  i = 0;
  j = 0;
});

pic1[0].addEventListener("mouseover", () => {
  pic1[0].classList.add("pic01");
  console.log("pic01");
});

pic1[1].addEventListener("mouseover", () => {
  pic1[1].classList.add("pic01");
  console.log("pic02");
});

projectDiv.addEventListener("mouseover", () => {
  slider.style.width = 79 + "px";
  slider.style.transform = `translateX(101px)`;
});

homeDiv.addEventListener("mouseover", () => {
  slider.style.width = 51 + "px";
  slider.style.transform = `translateX(0px)`;
});

aboutDiv.addEventListener("mouseover", () => {
  slider.style.width = 60 + "px";
  slider.style.transform = `translateX(361px)`;
});

contactDiv.addEventListener("mouseover", () => {
  slider.style.width = 81 + "px";
  slider.style.transform = `translateX(471px)`;
});

serviceDiv.addEventListener("mouseover", () => {
  slider.style.width = 81 + "px";
  slider.style.transform = `translateX(230px)`;
});

projectContainer.addEventListener("mouseenter", () => {
  projectContainer.classList.add("up");

  setTimeout(() => {
    projectContainer.classList.add("upMove");
  }, 500);
});

certiText.addEventListener("mouseenter", () => {
  certiText.classList.add("moveLeft");
  btnCerti.classList.add("moveLeft");

  setTimeout(() => {
    certiText.classList.add("upMove");
  }, 300);

  setTimeout(() => {
    btnCerti.classList.add("upMove");
  }, 300);
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
  slider.style.transform = `translateX(0px)`;
  //for textgroup
  text.classList.add("moveUp");

  setTimeout(() => {
    pText.classList.add("moveUp");
  }, 300);
  setTimeout(() => {
    btn.classList.add("moveUp");
  }, 600);

  setTimeout(() => {
    text.classList.remove("moveUp");
  }, 900);
  setTimeout(() => {
    pText.classList.remove("moveUp");
  }, 900);
  setTimeout(() => {
    btn.classList.remove("moveUp");
  }, 900);

  //for infoGroup
  setTimeout(() => {
    info1.classList.add("moveLeft");
  }, 2000);
  setTimeout(() => {
    info2.classList.add("moveLeft");
  }, 2200);
  setTimeout(() => {
    info3.classList.add("moveLeft");
  }, 2400);
  setTimeout(() => {
    info1.classList.remove("moveLeft");
  }, 2600);
  setTimeout(() => {
    info2.classList.remove("moveLeft");
  }, 2600);
  setTimeout(() => {
    info3.classList.remove("moveLeft");
  }, 2800);

  //certificate group
  setTimeout(() => {
    certiText.classList.add("moveRight");
  }, 2400);
  setTimeout(() => {
    certiText.classList.remove("moveRight");
  }, 2700);
  setTimeout(() => {
    btnCerti.classList.add("moveRight");
  }, 2600);
  setTimeout(() => {
    btnCerti.classList.remove("moveRight");
  }, 2900);
});

for (let i = 0; i < 6; i++) {
  menuItemTab[i].addEventListener("click", () => {
    let menuWord = menuItemTab[i];
    let menuWordWidth = menuWord.offsetWidth;
    slider.style.marginLeft = 0;
    slider.style.width = menuWordWidth + "px";
    let menuWordLeftDistance = menuWord.offsetLeft - 90;
    slider.style.transform = `translateX(${menuWordLeftDistance}px)`;
    console.log(menuWordLeftDistance);
    console.log("Width" + menuWordWidth);
  });
}
