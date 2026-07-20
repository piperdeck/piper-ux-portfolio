function initCarousel(wrapper) {
  const carousel = wrapper.querySelector('.carousel');
  const figures = carousel.querySelectorAll('figure');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target === figures[0]) {
        prevBtn.classList.toggle('disabled', entry.isIntersecting);
      }
      if (entry.target === figures[figures.length - 1]) {
        nextBtn.classList.toggle('disabled', entry.isIntersecting);
      }
    });
  }, { root: carousel, threshold: 0.9 });

  observer.observe(figures[0]);
  observer.observe(figures[figures.length - 1]);
}

function scrollCarousel(btn, dir) {
  const carousel = btn.closest('.carousel-wrapper').querySelector('.carousel');
  const figure = carousel.querySelector('figure');
  carousel.scrollBy({ left: dir * figure.offsetWidth, behavior: 'smooth'  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.carousel-wrapper').forEach(initCarousel);
  window.scrollCarousel = scrollCarousel;
});