// POPUP khi scroll
const pops = document.querySelectorAll('.pop');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

pops.forEach(pop => observer.observe(pop));

// FILL SKILL BARS khi scroll
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('style').replace('width: ', '');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
  fill.style.width = '0';
  skillObserver.observe(fill);
});
