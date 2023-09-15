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
    Array.from(navLinks).forEach((link) => (link.style.color = "black"));
    wpIcon.setAttribute("color", "rgba(0,0,0,1)");
    wpIcon.classList.add("bx", "bxs-like", "bx-burst");
  } else {
    Array.from(navLinks).forEach((link) => (link.style.color = "white"));
    scrollContainer.style.transform = `translateY(-100%)`;
  }
}
