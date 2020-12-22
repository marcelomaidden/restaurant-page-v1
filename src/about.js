const about = () => {
  const content = document.querySelector('div#content');
  content.innerHTML = '';

  const div = document.createElement('div');
  div.setAttribute('class', 'd-flex article flex-column poppins p-3');
  const p1 = document.createElement('p');
  p1.innerText = 'Microverse Restaurant was founded in 2010 by Marcelo Araujo';
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.innerText = 'The main principle is to make meals that bring to people love inside a plate';
  div.appendChild(p2);

  content.appendChild(div);
};

export default about;