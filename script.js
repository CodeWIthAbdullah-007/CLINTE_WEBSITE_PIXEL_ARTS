const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
});
(function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
})();

const hoverEls = document.querySelectorAll('a, button, .service-card, .why-card, .industry-item, input, select, textarea');
hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '18px'; cursor.style.height = '18px';
        ring.style.width  = '52px'; ring.style.height  = '52px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px'; cursor.style.height = '10px';
        ring.style.width  = '36px'; ring.style.height  = '36px';
    });
});

const navbar  = document.getElementById('navbar');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    navbar.classList.toggle('scrolled', sy > 60);
    backTop.classList.toggle('show', sy > 400);
}, { passive: true });

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('mobileClose').addEventListener('click', closeMobile);
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
}

const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger')
        .forEach(el => revealObs.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(a => a.classList.remove('active'));
            const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
            if (link) link.classList.add('active');
        }
    });
}, { threshold: 0.4 });
sections.forEach(s => activeObs.observe(s));

const countEls = document.querySelectorAll('[data-count]');
const countObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '+';
        let current = 0;
        const dur  = 1400, step = 16;
        const timer = setInterval(() => {
            current += Math.ceil(target / (dur / step));
            if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            } else {
                el.textContent = current + suffix;
            }
        }, step);
        countObs.unobserve(el);
    });
}, { threshold: 0.6 });
countEls.forEach(el => countObs.observe(el));
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btnText = e.target.querySelector('.btn-text');
    btnText.textContent = '✓ Message Sent!';
    e.target.querySelector('.btn-send').style.pointerEvents = 'none';
    setTimeout(() => {
        btnText.textContent = 'Send Message';
        e.target.querySelector('.btn-send').style.pointerEvents = '';
        e.target.reset();
    }, 3500);
});
