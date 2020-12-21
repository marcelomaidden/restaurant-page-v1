const create_anchor = (text) => {
  let anchor = document.createElement('li');
  let anchor_link = document.createElement('a');
  anchor_link.setAttribute('href', "#");
  anchor_link.innerText = text;
  anchor_link.setAttribute('class', 'nav-link active');
  anchor.appendChild(anchor_link);
  anchor.setAttribute('class', 'nav-item');

  return anchor;
}

const header = () => {
  let content = document.querySelector('div#content');
  let header = document.createElement('header');
  let header_h4 = document.createElement('h4');
  header_h4.innerText = 'Restaurante Microverse';
  header_h4.setAttribute('class', 'd-flex justify-content-between align-items-center px-5');

  let nav = document.createElement('ul');
  nav.setAttribute('class', 'poppins nav nav-tabs');

  nav.appendChild(create_anchor('Home'));
  nav.appendChild(create_anchor('About'));
  nav.appendChild(create_anchor('Recipes'));

  header.appendChild(nav);

  content.appendChild(header);
}
 
export { header }