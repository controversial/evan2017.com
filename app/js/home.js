/* global Modal */

function scrollHandler() {
  const scroll = window.scrollY;
  const height = window.innerHeight;

  // Top bar color
  document.getElementById('top-bar').className =
    scroll > 50 ? 'opaque' : '';

  // Name zoom
  const name = document.querySelector('h1.huge');
  name.style.transform = `translateY(-50%) scale(${(1 + (scroll / window.innerHeight))})`;

  // Header fade
  const header = document.querySelector('header');
  const opacity = 1 - (2 * (scroll / height));
  if (opacity <= 0) {
    header.style.display = 'none';
  } else {
    header.style.display = 'block';
    header.style.opacity = 1 - (2 * (scroll / height));
  }
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', scrollHandler);


const message = `

<h3> Pledge your vote </h3>
<h4> Support Evan Holland-Shepler and Luke Taylor for the 2017 junior class president and vice president </h4>

`;

document.addEventListener('DOMContentLoaded', () => {
  const m = new Modal(message);
  document.querySelector('header > a').addEventListener('click', m.present);
});
