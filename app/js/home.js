/* global Modal, Slideshow, Cookies */

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
  header.style.opacity = 1 - (2 * (scroll / height));
}

window.addEventListener('scroll', scrollHandler);
window.addEventListener('resize', scrollHandler);


function pledgeVote() {
  const userData = {
    first: document.getElementById('first').value,
    last: document.getElementById('last').value,
    email: document.getElementById('email').value,
  };
  window.data.add(userData).then(() => {
    window.modal.close();
    const pledgeButton = document.getElementById('pledgeButton');
    pledgeButton.disabled = true;
    pledgeButton.textContent = 'vote pledged';
    Cookies.set('votePledged', true);
  });
}

const message = `

<h3> Pledge your vote </h3>
<p> Support Evan Holland-Shepler and Luke Taylor for the 2017 junior class president and vice president </p>

<div class="form">
  <div class="horizontal-inputs">
    <input id="first" type="text" placeholder="First Name"> <input id="last" type="text" placeholder="Last Name">
  </div>

  <input id="email" type="email" placeholder="Email">

  <div class="button"> <button type="button" id="formSubmit"> Pledge your vote </button> </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
  window.modal = new Modal(message);
  document.getElementById('pledgeButton').addEventListener('click', window.modal.present);

  document.getElementById('formSubmit').addEventListener('click', pledgeVote);

  const imageUrls = [];
  for (let i = 1; i <= 10; i += 1) imageUrls.push(`https://ch7bmv8n.cloudimg.io/s/width/1000/evan2017.com/images/photo-${i}.jpg?v2`);
  window.slideshow = new Slideshow(document.querySelector('.background'), imageUrls);
  window.slideshow.start(5000);

  if (Cookies.get('votePledged')) {
    const pledgeButton = document.getElementById('pledgeButton');
    pledgeButton.disabled = true;
    pledgeButton.textContent = 'vote pledged';
  }
});
