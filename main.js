document.querySelectorAll('.img-menu').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('activa');
  });
});