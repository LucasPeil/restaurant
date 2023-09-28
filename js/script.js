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
    scrollContainer.style.backgroundColor = "white !important";

    Array.from(navLinks).forEach((link) => (link.style.color = "black"));
    /*  wpIcon.setAttribute("color", "rgba(0,0,0,1)");
    wpIcon.classList.add("bx", "bxs-like", "bx-burst"); */
  } else {
    Array.from(navLinks).forEach((link) => (link.style.color = "white"));
    scrollContainer.style.transform = `translateY(-100%)`;
  }
}

const image = document.querySelector(".image");
console.log(image);

// efeitos dos botoes do menu
const botoesMenu = document.querySelectorAll(".botoes-menus");
const estrelasMenu = document.querySelectorAll(".icones-botoes-menu");
console.log(botoesMenu);
const buttonClicked = [];
const starClicked = [];
botoesMenu.forEach((botao, index) => {
  botao.addEventListener("click", (e) => {
    buttonClicked.push(botao);
    starClicked.push(estrelasMenu[index]);
    botao.style.backgroundColor = "#F9E991";
    estrelasMenu[index].setAttribute("type", "solid");
    if (buttonClicked.length > 1 && starClicked.length > 1) {
      buttonClicked[0].style.backgroundColor = "transparent";
      starClicked[0].setAttribute("name", "star-half");
      starClicked[0].setAttribute("type", "solid");
      starClicked.shift();
      buttonClicked.shift();
    }

    /*  if (buttonClicked.indexOf(botao) == -1) {
      botao.style.backgroundColor = "#F9E991";
      estrelasMenu[index].setAttribute("type", "solid");
      buttonClicked.push(botao);
    } else {
      botao.style.backgroundColor = "transparent";
      estrelasMenu[index].setAttribute("type", "");
      buttonClicked.pop(botao);
    } */
  });
});

estrelasMenu.forEach((icone) => {
  icone.setAttribute("type", "");
});
