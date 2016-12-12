window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > 50) {
    document.getElementById('top-bar').className = 'opaque';
  } else {
    document.getElementById('top-bar').className = '';
  }
});
