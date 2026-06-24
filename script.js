// ===== Mobile nav toggle =====
const navBurger = document.getElementById('navBurger');
const navMobile = document.getElementById('navMobile');

if (navBurger) {
  navBurger.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navBurger.setAttribute('aria-expanded', isOpen);
  });

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navBurger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Scroll-triggered skill bars =====
const bars = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => barObserver.observe(bar));

// ===== Fade-in for sections / projects on scroll =====
const revealTargets = document.querySelectorAll('.project, .tl-item, .stack-col, .about-photo-wrap, .about-copy');

revealTargets.forEach(el => {
  el.classList.add('reveal-ready');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// Failsafe: if IntersectionObserver isn't supported, just show everything
if (!('IntersectionObserver' in window)) {
  revealTargets.forEach(el => el.classList.add('reveal-in'));
}
