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
<p> Support Evan Holland-Shepler and Luke Taylor for the 2017 junior class president and vice president </p>

<div class="form">
  <div class="horizontal-inputs">
    <input type="text" placeholder="First Name"> <input type="text" placeholder="Last Name">
  </div>

  <input type="email" placeholder="Email">

  <div class="button"> <button type="button" id="formSubmit"> Pledge your vote </button> </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const m = new Modal(message);
  document.querySelector('header > a').addEventListener('click', m.present);

  document.getElementById('formSubmit').addEventListener('click', () => {
    console.log('submit');
  });
});
