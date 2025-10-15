// Hiệu ứng popup khi scroll
const pops = document.querySelectorAll('.pop');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

pops.forEach(pop => observer.observe(pop));
