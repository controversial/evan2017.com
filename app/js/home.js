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

<h3> About </h3>
<p class="center"> Support Evan Holland-Shepler and Luke Taylor for the 2017 junior class president and vice president </p>

<hr>

<h4> Prom </h4>

<p>
Prom is a highlight of junior year. And in order to have a great prom, we have to cater to <i>your</i>
wishes. In order to truly create a great prom, we will be letting <b>YOU</b> make the decisions for
prom—not us. Let us do the organization, but you'll be able to decide everything that will make your
prom a magical and memorable experience. Through Instagram, Snapchat, and Twitter, we will conduct polls
to get the class's opinion on every decision.
</p>
<p>
Second, we want prom to be as affordable as possible so that nobody has to struggle to pay for prom tickets.
Ticket cost should never restriction on a student's prom experience, but we will not sacrifice
extravagance for cost. Rather than holding a cheap prom, we will fundraise the hell out of prom! With the
cooperation of the student body, we can truly make prom a magical experience without compromise. We will
talk to the administration about creating a monthly bake sale for prom, and email various fundraising
companies to set up candy and cookie dough fundraisers. With the class's help, we will be able to achieve
our goal of an affordable prom, so that every member of the junior class can have an unrestricted prom
experience.
</p>
<p>
We can create the best prom New Paltz High School has ever seen.
</p>

<h4> Dress Code </h4>

<p>
Luke Taylor and I agree that people are not a distraction! People should be able to express
themselves however they like within some guidelines. When student government meets to discuss the
dress code we will both be there fighting for people’s right to express themselves.
</p>

<h4> Lunch </h4>

<p>
Look, we know it may not make a difference, but Luke and I will fight tooth and nail to bring change to
this outrageously short lunch schedule which leaves hardly any time to eat and have a break from class.
We will set up as many meetings with student government to draft petitions and organize talks with the
administration to increase lunch times. Our hard-working student body deserves sufficient time to eat
and socialize.
</p>

<p>
</p>
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
