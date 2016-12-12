window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  // Top bar color
  document.getElementById('top-bar').className =
    scroll > 50 ? 'opaque' : '';
});
