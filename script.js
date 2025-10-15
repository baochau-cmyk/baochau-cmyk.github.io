// Scroll reveal (popup-like) + floating popup show-once
document.addEventListener('DOMContentLoaded', function () {
  const pops = document.querySelectorAll('.pop');
  const options = { threshold: 0.12 };

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // optional: unobserve to avoid re-trigger
        io.unobserve(entry.target);
      }
    });
  }, options);

  pops.forEach(p => io.observe(p));

  // Floating popup: show when user scrollY > 300 (only once)
  const floating = document.getElementById('floating-popup');
  let shown = false;
  function checkFloat() {
    if (!shown && window.scrollY > 300) {
      floating.classList.add('show');
      shown = true;
      setTimeout(() => floating.classList.remove('show'), 4000);
    }
  }
  window.addEventListener('scroll', checkFloat, { passive: true });

  // Animate skill fills when the skills section appears
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.skill-fill').forEach(el => {
            const val = getComputedStyle(el).getPropertyValue('--val') || '50%';
            el.style.width = val.trim();
          });
          skillObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    skillObserver.observe(skillsSection);
  }
});
