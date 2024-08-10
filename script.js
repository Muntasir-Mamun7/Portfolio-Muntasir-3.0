function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('active');
    icon.classList.toggle('open');

    // Add animation classes
    if (menu.classList.contains('active')) {
        menu.classList.add('slide-in');
        menu.classList.remove('slide-out');
    } else {
        menu.classList.add('slide-out');
        menu.classList.remove('slide-in');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Intersection Observer for fade-in effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});

