// Professional JS for Luxora Furniture Landing Page

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menu-toggle');
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('show');
    const expanded = nav.classList.contains('show');
    menuToggle.setAttribute('aria-expanded', expanded);
  });

  // Keyboard accessibility for menu (Esc to close)
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && nav.classList.contains('show')) {
      nav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', false);
    }
  });

  // Carousel scroll logic
  function scrollCarousel(dir) {
    carousel.scrollBy({ left: dir * 320, behavior: 'smooth' });
  }
  prevBtn.addEventListener('click', () => scrollCarousel(-1));
  nextBtn.addEventListener('click', () => scrollCarousel(1));

  // Auto-scroll the carousel
  setInterval(() => scrollCarousel(1), 4000);

  // Contact Form Accessibility: basic validation feedback (optional)
  const contactForm = document.querySelector('.contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Basic validation
      if (!contactForm.checkValidity()) {
        e.preventDefault();
      }
      // You can extend this area to submit via AJAX or display thank you
    });
  }
});
