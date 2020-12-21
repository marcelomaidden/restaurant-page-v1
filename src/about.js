const about = () => {
  let content = document.querySelector('div#content');
  content.innerHTML = '';

  let div = document.createElement('div');
  div.setAttribute('class', 'd-flex article flex-column poppins p-3');
  let p1 = document.createElement('p');
  p1.innerText = 'Microverse Restaurant was founded in 2010 by Marcelo Araujo';
  div.appendChild(p1);
  let p2 = document.createElement('p');
  p2.innerText = "The main principle is to make meals that bring to people love inside a plate";
  div.appendChild(p2);

  content.appendChild(div);
}

export default about;