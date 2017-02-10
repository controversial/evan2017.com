/* global Modal, Slideshow */

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
  let opacity = 1 - (2 * (scroll / height));
  if (opacity < 0) opacity = 0;
  header.style.opacity = 1 - (2 * (scroll / height));
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
  window.modal = new Modal(message);
  document.querySelector('header > a').addEventListener('click', window.modal.present);

  document.getElementById('formSubmit').addEventListener('click', () => {
    console.log('submit');
  });

  const imageUrls = [];
  for (let i = 1; i <= 11; i += 1) imageUrls.push(`http://evan2017.com/images/photo-${i}.jpg`);
  window.slideshow = new Slideshow(document.querySelector('.background'), imageUrls);
});
