(function() {
  // Menu toggle logic
  const menuBtn = document.getElementById('menu-btn');
  const desktopMenuBtn = document.getElementById('desktop-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const overlay = document.getElementById('menu-overlay');
  const menuLinks = document.querySelectorAll('.menu-link');

  function toggleMenu() {
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');
    // Using a timeout to allow the 'hidden' removal to settle before animating opacity
    setTimeout(() => {
      overlay.classList.toggle('opacity-0');
      overlay.classList.toggle('translate-y-[-20px]');
    }, 10);
  }

  if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
  if (desktopMenuBtn) desktopMenuBtn.addEventListener('click', toggleMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Simple scroll animation for the Philosophy section
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0');
      }
    });
  }, observerOptions);

  const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
  animateOnScroll.forEach(el => observer.observe(el));
})();
