window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = window.innerHeight;

  // Top bar color
  document.getElementById('top-bar').className =
    scroll > 50 ? 'opaque' : '';

  // Name zoom and fade
  const name = document.querySelector('h1.huge');
  name.style.transform = `scale(${(1 + (scroll / window.innerHeight))})`;
  const opacity = 1 - (2 * (scroll / height));
  if (opacity <= 0) {
    name.style.display = 'none';
  } else {
    name.style.display = 'block';
    name.style.opacity = 1 - (2 * (scroll / height));
  }
});
