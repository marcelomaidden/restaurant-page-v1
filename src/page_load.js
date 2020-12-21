import home from './home';
import about from './about';
import contact from './contact';
import create_anchor from './create_anchor';

const home_click = () => {
  home();
}

const about_click = () => {
  console.log('clicked here')
  about();
}

const contact_click = () => {
  console.log('clicked here')
  contact();
}

const page_load = () => {
  let header = document.querySelector('header');
  let header_h4 = document.createElement('h4');
  header_h4.innerText = 'Restaurante Microverse';
  header_h4.setAttribute('class', 'd-flex justify-content-between align-items-center px-5');

  let nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(create_anchor('Home', 'nav-item'));
  nav.appendChild(create_anchor('About', 'nav-item'));
  nav.appendChild(create_anchor('Contact', 'nav-item'));

  header.appendChild(nav);

  let home_anchor = document.querySelector('a[data-id="Home"]');
  home_anchor.addEventListener('click', home_click);

  let about_anchor = document.querySelector('a[data-id="About"]');
  about_anchor.addEventListener('click', about_click);

  let contact_anchor = document.querySelector('a[data-id="Contact"]');
  contact_anchor.addEventListener('click', contact_click);
}
 
home(); 

export default page_load;