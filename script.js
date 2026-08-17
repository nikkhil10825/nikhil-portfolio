document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Animate skill bars when they enter view
const bars = document.querySelectorAll('.bar-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(bar => observer.observe(bar));

// Reveal page sections as they enter the viewport
const revealItems = document.querySelectorAll(
  '.journey-head, .service, .skills-card, .projects .eyebrow, .projects h2, .project-card, .explore-wrap, .connect > *, .footer-grid > *'
);
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item, index) => {
  item.classList.add('reveal');
  item.classList.add(`reveal--delay-${index % 4}`);
  revealObserver.observe(item);
});

// Cycle the highlighted expertise through a slower type-and-delete effect
const typewriterSkill = document.querySelector('.typewriter-skill');
if (typewriterSkill && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const skills = ['Motion Graphics', 'Video Editor', 'AI Video Creator'];
  let skillIndex = 0;
  let letterIndex = 0;
  let deleting = false;

  const typeSkill = () => {
    const activeSkill = skills[skillIndex];
    typewriterSkill.textContent = activeSkill.slice(0, letterIndex);

    if (!deleting && letterIndex < activeSkill.length) {
      letterIndex += 1;
      setTimeout(typeSkill, 170);
    } else if (!deleting) {
      deleting = true;
      setTimeout(typeSkill, 1800);
    } else if (letterIndex > 0) {
      letterIndex -= 1;
      setTimeout(typeSkill, 92);
    } else {
      deleting = false;
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(typeSkill, 360);
    }
  };

  typewriterSkill.textContent = '';
  typeSkill();
}

// Give the portrait a subtle depth shift while the hero scrolls through view (desktop only)
const heroSection = document.querySelector('.hero-section');
if (heroSection && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const updateHeroParallax = () => {
    if (window.innerWidth <= 980) {
      heroSection.style.removeProperty('--portrait-scroll');
      heroSection.style.removeProperty('--hero-copy-scroll');
      heroSection.style.removeProperty('--hero-background-scroll');
      return;
    }
    const heroBounds = heroSection.getBoundingClientRect();
    const shift = Math.max(-26, Math.min(26, -heroBounds.top * 0.08));
    heroSection.style.setProperty('--portrait-scroll', `${shift}px`);
    heroSection.style.setProperty('--hero-copy-scroll', `${shift * -0.32}px`);
    heroSection.style.setProperty('--hero-background-scroll', `${shift * 0.55}px`);
  };

  window.addEventListener('scroll', updateHeroParallax, { passive: true });
  window.addEventListener('resize', updateHeroParallax, { passive: true });
  updateHeroParallax();
}

// Soft cursor light: white in the hero, muted orange across the rest of the page
const canUseCursorGlow = window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canUseCursorGlow) {
  let cursorFrame = null;
  let cursorX = 0;
  let cursorY = 0;

  const updateCursorGlow = () => {
    document.body.style.setProperty('--cursor-x', `${cursorX}px`);
    document.body.style.setProperty('--cursor-y', `${cursorY}px`);
    document.body.classList.add('cursor-glow-active');
    cursorFrame = null;
  };

  window.addEventListener('pointermove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;

    if (!cursorFrame) {
      cursorFrame = window.requestAnimationFrame(updateCursorGlow);
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-glow-active');
  });
}

// Contact Information Modal
const contactModal = document.getElementById('contactModal');
const contactModalClose = document.getElementById('contactModalClose');
const contactTriggers = document.querySelectorAll('.contact-trigger');

function openContactModal() {
  if (contactModal) {
    contactModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeContactModal() {
  if (contactModal) {
    contactModal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

contactTriggers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openContactModal();
  });
});

if (contactModalClose) {
  contactModalClose.addEventListener('click', closeContactModal);
}

if (contactModal) {
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && contactModal && !contactModal.classList.contains('hidden')) {
    closeContactModal();
  }
});

