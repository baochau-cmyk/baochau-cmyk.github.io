// Scroll animation
const pops = document.querySelectorAll('.pop');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Chỉ thêm class 'show' khi phần tử đi vào viewport
    if (entry.isIntersecting) entry.target.classList.add('show');
    // Có thể thêm else để làm hiệu ứng lặp lại (nếu cần)
    // else entry.target.classList.remove('show');
  });
});
pops.forEach(pop => observer.observe(pop));