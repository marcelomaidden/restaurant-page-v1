import createAnchor from './create_anchor';

const home = () => {
  const content = document.querySelector('div#content');
  content.innerHTML = '';

  const div = document.createElement('div');
  div.setAttribute('class', 'd-flex article flex-column poppins p-3');
  const h4 = document.createElement('h4');
  h4.innerText = 'Contact us through our social media links';
  div.appendChild(h4);

  const nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(createAnchor('Instagram', 'fa fa-instagram'));
  nav.appendChild(createAnchor('Twitter', 'fa fa-twitter'));
  nav.appendChild(createAnchor('Facebook', 'fa fa-facebook'));

  div.appendChild(nav);

  content.appendChild(div);
};

export default home;