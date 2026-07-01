const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burgerBtn.textContent = '☰';
  });
});

// --- Active section underline ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = navLinks.querySelectorAll('a[href^="#"], a[href*="#"]');

function setActiveLink(){
  let currentId = "";
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if(scrollPos >= section.offsetTop){
      currentId = section.id;
    }
  });

  navAnchors.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').split('#')[1];
    if(href === currentId){
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);