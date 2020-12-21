import create_anchor from './create_anchor';

const home = () => {
  let content = document.querySelector('div#content');
  content.innerHTML = '';

  let div = document.createElement('div');
  div.setAttribute('class', 'd-flex article flex-column poppins p-3');
  let h4 = document.createElement('h4');
  h4.innerText = 'Contact us through our social media links';
  div.appendChild(h4);

  let nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(create_anchor('Instagram', 'fa fa-instagram'));
  nav.appendChild(create_anchor('Twitter', 'fa fa-twitter'));
  nav.appendChild(create_anchor('Facebook', 'fa fa-facebook'));

  div.appendChild(nav);

  content.appendChild(div);
}

export default home;