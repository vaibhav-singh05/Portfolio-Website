document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initScrollProgress();
    initSmoothScrolling();
    initNavbarScroll();
    initNavToggle();
    initTyped();
    initScrollReveal();
});

function initNavToggle() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    const closeMenu = () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
    };

    toggle.addEventListener('click', () => {
        const open = toggle.classList.toggle('open');
        links.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function initScrollReveal() {
    const els = document.querySelectorAll('.section-title, .timeline-item, .expertise-card, .education-card, .skill-category, .achievement-card, .project-card, .featured-card, .contact-item, .projects-title, .contact-title');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('revealed');
        });
    }, { threshold: 0.05, rootMargin: '0 0 -30px 0' });
    els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

function initTyped() {
    const el = document.getElementById('typed-element');
    if (!el || typeof Typed === 'undefined') return;
    new Typed('#typed-element', {
        strings: [
            'Senior AI Software Engineer',
            'AI Software Engineer',
            'Python Developer',
            'Django REST Developer',
            'API Builder',
            'Problem Solver'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: false
    });
}

function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 36;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (15 + Math.random() * 15) + 's';
        container.appendChild(p);
    }
}

function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (window.pageYOffset / h) * 100 + '%';
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initNavbarScroll() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.pageYOffset > 50);
    });
}
