document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
        });
        links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').slice(1) === current);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
    }, { threshold: 0.15 });

    sections.forEach(sec => observer.observe(sec));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});