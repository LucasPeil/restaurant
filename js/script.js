// Import our custom CSS
//import '../css/style.scss'


// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

function scrollTrigger(selector) {
  let els = document.querySelectorAll(selector);

  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el);
  });
}

function addObserver(el) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(el);
}

scrollTrigger(".cover-subcontainer");

function headerAnimation() {
  const scrollContainer = document.querySelector(".scroll-container");
  const navLinks = document.querySelectorAll(".nav-links");
  const wpIcon = document.querySelector("#wp-icon");

  if (window.scrollY > 100) {
    scrollContainer.style.transform = `translateY(0%)`;
    scrollContainer.style.backgroundColor = "#fefcf2 !important";

    Array.from(navLinks).forEach((link) => (link.style.color = "black"));
    /*  wpIcon.setAttribute("color", "rgba(0,0,0,1)");
    wpIcon.classList.add("bx", "bxs-like", "bx-burst"); */
  } else {
    Array.from(navLinks).forEach((link) => (link.style.color = "white"));
    scrollContainer.style.transform = `translateY(-100%)`;
  }
}

const image = document.querySelector(".image");

// efeitos dos botoes do menu e da transição das opções de menu
const listaMenu = document.querySelector("#lista-menu");
const menuTransicao = document.querySelector(".menu-transicao");

const botoesMenu = document.querySelectorAll(".botoes-menus");
const estrelasMenu = document.querySelectorAll(".icones-botoes-menu");
const buttonLabel = document.querySelectorAll(".botao-label");
const buttonClicked = [];
const starClicked = [];

botoesMenu.forEach((botao, index) => {
  botao.addEventListener("click", (e) => {
    listaMenu.style.opacity = 0;
    listaMenu.style.transform = "translateX(-50%)";

    setTimeout(() => {
      listaMenu.innerHTML = `<object width="100%" height="800" type="text/html" data="../${buttonLabel[index].dataset.label}.html"</object>`;
      setTimeout(() => {
        console.log("100");
        listaMenu.style.opacity = 1;
        listaMenu.style.transform = "translateX(0%)";
      }, 150);
      console.log("350");
      listaMenu.style.opacity = 0;
      listaMenu.style.transform = "translateX(800%)";
    }, 400);

    buttonClicked.push(botao);
    starClicked.push(estrelasMenu[index]);
    botao.style.backgroundColor = "#F9E991";
    if (buttonClicked.length > 1 && starClicked.length > 1) {
      buttonClicked[0].style.backgroundColor = "transparent";
      starClicked.shift();
      buttonClicked.shift();
    }
  });
});

estrelasMenu.forEach((icone) => {
  icone.setAttribute("type", "");
});


// PERGUNTAS FREQUENTES

const closeIcons = document.querySelectorAll(".close-icon") 
const answers = document.querySelectorAll(".answers") 

const iconClicked=[]
closeIcons.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    icon.classList.toggle("close-icon-click")
    
    answers[index].classList.toggle("answers-click")
    setTimeout(() => {
      answers[index].classList.toggle("answers-hide")
    }, 500);
  })
})


const coverSubcontainer = document.querySelector(".cover-subcontainer ")

setTimeout(() => {
  coverSubcontainer.style.height = "100vh";
  coverSubcontainer.style.opacity = 1;
}, 400);


//open modal

const barButton = document.querySelector("#bar-button")
const modalMenu = document.querySelector(".modal-menu")
const overlay = document.querySelector("#overlay")
function disableWheelScroll(e) {
  e.preventDefault();
}
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  scrollLeft = window.scrollX || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}
function enableScroll() {
  window.onscroll = function() {};
}
const openMenuModal = ()=>{
    overlay.classList.add("overlay")
    
  window.onscroll = function() {
    disableScroll()
};
window.addEventListener("wheel", disableWheelScroll, { passive:false })

setTimeout(() => {
  modalMenu.style.left=0
 
}, 300);

setTimeout(() => {
  modalMenu.style.display="block"
 
}, 100);

}
const closeMenuModal = ()=>{
  window.removeEventListener("wheel", disableWheelScroll);
 
  overlay.classList.remove("overlay")
  modalMenu.style.left="-1000px"
  window.onscroll=null

  setTimeout(() => {
    modalMenu.style.display="none"
    modalMenu.style.left=-1000
  }, 300);
}


/*  estrelasMenu[index].setAttribute("type", "solid"); */

/* starClicked[0].setAttribute("name", "star-half");
      starClicked[0].setAttribute("type", "solid"); */

/*  if (buttonClicked.indexOf(botao) == -1) {
      botao.style.backgroundColor = "#F9E991";
      estrelasMenu[index].setAttribute("type", "solid");
      buttonClicked.push(botao);
    } else {
      botao.style.backgroundColor = "transparent";
      estrelasMenu[index].setAttribute("type", "");
      buttonClicked.pop(botao);
    } */
