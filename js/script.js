/*==================== Toggle Icon Navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
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
    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 450);

    /*==================== Remove Toggle Icon And Navbar When Click Navbar Link (Scroll) ====================*/
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*==================== Scroll Reveal ====================*/

ScrollReveal().reveal('.home-content, .heading, .title-container', { origin: 'top', reset:true, distance:'80px', delay:100, duration:2000 });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin: 'bottom', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.scroll-down', { origin: 'bottom', reset:true, distance:'80px', delay:200, duration:2000 });

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

const halo = document.getElementById("cursor-halo");

document.addEventListener("mousemove", (e) => {
  halo.style.left = e.clientX + "px";
  halo.style.top  = e.clientY + "px";
});
