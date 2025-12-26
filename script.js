document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});


function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
