function m1() {
  const a = +document.getElementById("inputValue").value;
  const b = +document.getElementById("inputValue-1").value;
  const c = +document.getElementById("inputValue-2").value;

  function digitSum(K) {
    if (K === 0) return false;
    return (K % 10) + digitSum(Math.floor(K / 10));
  }
  function totalSum(a, b, c) {
    return digitSum(a) + digitSum(b) + digitSum(c);
  }
  document.getElementById(
    "output"
  ).innerHTML = `Raqamlar yig'indisi: ${totalSum(a, b, c)}`;
}

function m2() {
  const n = +document.getElementById("inputValue2").value;
  function Fib1(n) {
    if (n === 1 || n === 2) return 1;
    return Fib1(n - 2) + Fib1(n - 1); 
  }

  document.getElementById(
    "output2"
  ).innerHTML = `Fibonachining ${n}-elementi: ${Fib1(n)}`;
}

function m3() {
  const num1 = +document.getElementById("inputValue3").value;
  const num2 = +document.getElementById("inputValue3-1").value;
  const num3 = +document.getElementById("inputValue3-2").value;
  function Fact(N) {
    if (N === 1 || N === 0) return 1; 
    return N * Fact(N - 1); 
  }
  const fact1 = Fact(num1);
  const fact2 = Fact(num2);
  const fact3 = Fact(num3);
  document.getElementById("output3").innerHTML = `
    ${num1}! = ${fact1} <br>
    ${num2}! = ${fact2} <br>
    ${num3}! = ${fact3}
  `;
}


// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  mouseWheel: true,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchEventsTarget: "container",
  touchRatio: 1,
});
