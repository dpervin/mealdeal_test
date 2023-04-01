// Add hover effect to grid items
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  const img = item.querySelector('img');
  const title = item.querySelector('h3');

  item.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'all 0.3s ease-out';
    title.style.opacity = '1';
    title.style.transition = 'all 0.3s ease-out';
  });

  item.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transition = 'all 0.3s ease-out';
    title.style.opacity = '0';
    title.style.transition = 'all 0.3s ease-out';
  });
});