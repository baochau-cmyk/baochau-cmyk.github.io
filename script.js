// Hiệu ứng popup khi scroll + kích hoạt thanh kỹ năng
const pops = document.querySelectorAll('.pop');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      // Nếu là phần kỹ năng, thêm hiệu ứng thanh chạy
      if (entry.target.id === 'skills') {
        const skills = entry.target.querySelectorAll('.skill');
        skills.forEach(skill => {
          const percent = skill.dataset.percent;
          const bar = skill.querySelector('.skill-bar div');
          bar.style.width = percent + '%';
        });
      }
    }
  });
});

pops.forEach(pop => observer.observe(pop));
