import menu from './menu';
import about from './about';
import contact from './contact';
import createAnchor from './create_anchor';

const menuClick = () => {
  menu();
};

const aboutClick = () => {
  about();
};

const contactClick = () => {
  contact();
};

const pageLoad = () => {
  const header = document.querySelector('header');
  const headerH4 = document.createElement('h4');
  headerH4.innerText = 'Restaurante Microverse';
  headerH4.setAttribute('class', 'd-flex justify-content-between align-items-center px-5');

  const nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(createAnchor('Menu', 'nav-item'));
  nav.appendChild(createAnchor('About', 'nav-item'));
  nav.appendChild(createAnchor('Contact', 'nav-item'));

  header.appendChild(nav);

  const menuAnchor = document.querySelector('a[data-id="Menu"]');
  menuAnchor.addEventListener('click', menuClick);

  const aboutAnchor = document.querySelector('a[data-id="About"]');
  aboutAnchor.addEventListener('click', aboutClick);

  const contactAnchor = document.querySelector('a[data-id="Contact"]');
  contactAnchor.addEventListener('click', contactClick);
};

menu();

export default pageLoad;