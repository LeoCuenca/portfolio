/*==================== Toggle Icon Navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    
    if (navbar.classList.contains('active')) {
        // Está abierto → cerrar con animación
        navbar.classList.remove('active');
        navbar.classList.add('closing');

        // esperar a que termine la animación
        setTimeout(() => {
            navbar.classList.remove('closing');
        }, 1000); // mismo tiempo que los keyframes
    } else {
        // Está cerrado → abrir normal
        navbar.classList.add('active');
    }

    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active-icon');
};

/*==================== Scroll Sections Active Link ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

/*==================== Sticky Navbar ====================*/
    
const header = document.querySelector('header');
const about = document.querySelector('.about')
const service = document.querySelector('.services')
const portfolio = document.querySelector('.portfolio')

header.classList.toggle('sticky', window.scrollY > 250);

window.addEventListener('resize', () =>{
    if (window.innerWidth <= 768){
        about.classList.add('mobile-scroll-margin-top')
        service.classList.add('mobile-scroll-margin-top')
        portfolio.classList.add('mobile-scroll-margin-top')
    }
    else{
        about.classList.remove('mobile-scroll-margin-top')
        service.classList.remove('mobile-scroll-margin-top')
        portfolio.classList.remove('mobile-scroll-margin-top')
    }
});

/*==================== Remove Toggle Icon And Navbar When Click Navbar Link (Scroll) ====================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

/*==================== Scroll Reveal ====================*/

ScrollReveal().reveal('.home-title', { origin: 'top', reset:true, distance:'80px', delay:100, duration:1000 });
ScrollReveal().reveal('.home-multiple', { origin: 'bottom', reset:true, distance:'80px', delay:100, duration:1000 });
ScrollReveal().reveal('.social-bar', { origin: 'left', reset:true, distance:'80px', delay:1000, duration:2000 });
ScrollReveal().reveal('.scroll-down', { origin: 'bottom', reset:true, distance:'80px', delay:2000, duration:1500 });

/*==================== Scroll Reveal Intercalado Skills ====================*/

ScrollReveal().reveal('.tech:nth-child(2)', { origin: 'bottom', reset:true, distance:'100px', delay:100, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(3)', { origin: 'top', reset:true, distance:'100px', delay:200, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(4)', { origin: 'bottom', reset:true, distance:'100px', delay:300, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(5)', { origin: 'top', reset:true, distance:'100px', delay:400, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(6)', { origin: 'bottom', reset:true, distance:'100px', delay:500, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(7)', { origin: 'top', reset:true, distance:'100px', delay:600, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(8)', { origin: 'bottom', reset:true, distance:'100px', delay:700, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(9)', { origin: 'top', reset:true, distance:'100px', delay:800, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(10)', { origin: 'bottom', reset:true, distance:'100px', delay:900, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(11)', { origin: 'top', reset:true, distance:'100px', delay:1000, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(12)', { origin: 'bottom', reset:true, distance:'100px', delay:1100, duration:1000 });

/*==================== Scroll Reveal Intercalado Skills ====================*/

ScrollReveal().reveal('.skills-title h2', { origin: 'right', reset:true, distance:'100px', delay:400, duration:1000 });
ScrollReveal().reveal('.certificates-title h2', { origin: 'left', reset:true, distance:'100px', delay:1200, duration:1000 });

ScrollReveal().reveal('.certificates-box:nth-child(2)', { origin: 'left', reset:true, distance:'100px', delay:1300, duration:1000 });
ScrollReveal().reveal('.certificates-box:nth-child(3)', { origin: 'left', reset:true, distance:'100px', delay:1400, duration:1000 });
ScrollReveal().reveal('.certificates-box:nth-child(4)', { origin: 'left', reset:true, distance:'100px', delay:1500, duration:1000 });

/*==================== Typed JS ====================*/

const typed = new Typed('.multiple-text',{
    strings: ['Técnico Universitario en Programación', 'Frontend Developer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 4000,
    loop: true
});

/*==================== Language Selection ====================*/

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

/*==================== Language Selection / Gray Flag / Contact Title Translation ====================*/

var flagSpa = document.getElementById('spanish');
var flagUsa = document.getElementById('english');

const contactSpa = document.getElementById("cont-es");
const contactUsa = document.getElementById("cont-en");

var menu = document.querySelector('.navbar');

flagSpa.addEventListener('click', function () {

    if (flagSpa.classList.contains('gray')) {
        flagSpa.classList.remove('gray');
        flagUsa.classList.toggle('gray');
    }

    if (contactSpa.classList.contains('hidden')) {
        contactSpa.classList.remove('hidden');
        contactUsa.classList.toggle('hidden');
    }

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');

});

flagUsa.addEventListener('click', function () {

    if (flagUsa.classList.contains('gray')) {
        flagUsa.classList.remove('gray');
        flagSpa.classList.toggle('gray');
    }

    if (contactUsa.classList.contains('hidden')) {
        contactUsa.classList.remove('hidden');
        contactSpa.classList.toggle('hidden');
    }

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');

});

// COLOR MOUSE

const halo = document.getElementById("cursor-halo");

document.addEventListener("mousemove", (e) => {
  halo.style.left = e.clientX + "px";
  halo.style.top  = e.clientY + "px";
});


// Carrousel rotation

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, Math.random() * (4000 - 1500) + 1500); // Randomizer del tiempo
});

// ACORDEON

const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const flecha = item.querySelector('span')

    header.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-item.active');
    if (openItem && openItem !== item) {

        openItem.classList.remove('active');
        const openFlecha = openItem.querySelector('span');
        openFlecha.textContent ='+'
    }
    item.classList.toggle('active');
    flecha.textContent = item.classList.contains('active') ? '-' : '+';
    });
});





