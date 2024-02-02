/*==================== toggle icon navbar ====================*/

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
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== Remove Toggle Icon And Navbar When Click Navbar Link (Scroll) ====================*/
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*==================== Scroll Reveal ====================*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', reset:true, distance:'80px', delay:200, duration:2000 });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right', reset:true, distance:'80px', delay:200, duration:2000 });

// ScrollReveal().reveal('.tech:nth-child(even)', { origin: 'top', reset:true, distance:'100px', delay:200, duration:1000 });
// ScrollReveal().reveal('.tech:nth-child(odd)', { origin: 'bottom', reset:true, distance:'100px', delay:100, duration:1000 });

/*==================== Scroll Reveal Intercalado Skills ====================*/

ScrollReveal().reveal('.tech:nth-child(2)', { origin: 'bottom', reset:true, distance:'100px', delay:200, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(3)', { origin: 'top', reset:true, distance:'100px', delay:400, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(4)', { origin: 'bottom', reset:true, distance:'100px', delay:600, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(5)', { origin: 'top', reset:true, distance:'100px', delay:800, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(6)', { origin: 'bottom', reset:true, distance:'100px', delay:1000, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(7)', { origin: 'top', reset:true, distance:'100px', delay:1200, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(8)', { origin: 'bottom', reset:true, distance:'100px', delay:1400, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(9)', { origin: 'top', reset:true, distance:'100px', delay:1600, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(10)', { origin: 'bottom', reset:true, distance:'100px', delay:1800, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(11)', { origin: 'top', reset:true, distance:'100px', delay:2000, duration:1000 });
ScrollReveal().reveal('.tech:nth-child(12)', { origin: 'bottom', reset:true, distance:'100px', delay:2200, duration:1000 });

/*==================== Scroll Reveal Intercalado Skills ====================*/
ScrollReveal().reveal('.skills-title h2', { origin: 'right', reset:true, distance:'100px', delay:400, duration:1000 });
ScrollReveal().reveal('.certificates-title h2', { origin: 'left', reset:true, distance:'100px', delay:2400, duration:1000 });

ScrollReveal().reveal('.certificates-box:nth-child(2)', { origin: 'left', reset:true, distance:'100px', delay:2600, duration:1000 });
ScrollReveal().reveal('.certificates-box:nth-child(3)', { origin: 'left', reset:true, distance:'100px', delay:2800, duration:1000 });
ScrollReveal().reveal('.certificates-box:nth-child(4)', { origin: 'left', reset:true, distance:'100px', delay:3000, duration:1000 });

/*==================== Typed JS ====================*/

const typed = new Typed('.multiple-text',{
    strings: ['Técnico Universitario en Programación', 'Frontend Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});