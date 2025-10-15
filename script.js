// Hiệu ứng popup khi scroll
const pops = document.querySelectorAll('.pop');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

pops.forEach(pop => observer.observe(pop));
