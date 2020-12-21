import home from './home';
import about from './about';

const home_click = () => {
  home();
}

const about_click = () => {
  console.log('clicked here')
  about();
}

const create_anchor = (text) => {
  let anchor = document.createElement('li');
  let anchor_link = document.createElement('a');
  anchor_link.setAttribute('href', "#");
  anchor_link.setAttribute('data-id', text);
  anchor_link.innerText = text;
  anchor_link.setAttribute('class', 'nav-link active');
  anchor.appendChild(anchor_link);
  anchor.setAttribute('class', 'nav-item');

  return anchor;
}

const page_load = () => {
  let header = document.querySelector('header');
  let header_h4 = document.createElement('h4');
  header_h4.innerText = 'Restaurante Microverse';
  header_h4.setAttribute('class', 'd-flex justify-content-between align-items-center px-5');

  let nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(create_anchor('Home'));
  nav.appendChild(create_anchor('About'));
  nav.appendChild(create_anchor('Recipes'));

  header.appendChild(nav);

  let home_anchor = document.querySelector('a[data-id="Home"]');
  home_anchor.addEventListener('click', home_click);

  let about_anchor = document.querySelector('a[data-id="About"]');
  about_anchor.addEventListener('click', about_click);

  let recipes_anchor = document.querySelector('a[data-id="Recipes"]');
  recipes_anchor.addEventListener('click', home_click);
}
 
home(); 

export default page_load;