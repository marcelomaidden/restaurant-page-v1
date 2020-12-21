const home = () => {
  let content = document.querySelector('div#content');
  content.innerHTML = '';

  let div = document.createElement('div');
  div.setAttribute('class', 'd-flex article flex-column poppins p-3');
  let p1 = document.createElement('p');
  p1.innerText = 'Microverse Restaurant is one of the most awarded restaurants in the world';
  div.appendChild(p1);
  let p2 = document.createElement('p');
  p2.innerText = 'Check it out some of our tasteful meals';
  div.appendChild(p2);

  content.appendChild(div);

  let divImages = document.createElement('div');
  divImages.setAttribute('class', 'meals');
  let meal1 = document.createElement('img');
  meal1.setAttribute('src', '../dist/assets/images/dan-gold.jpg');
  meal1.setAttribute('alt', 'Salads');
  meal1.setAttribute('class', 'image-meal');
  divImages.appendChild(meal1);

  let meal2 = document.createElement('img');
  meal2.setAttribute('src', '../dist/assets/images/rachel-park.jpg');
  meal2.setAttribute('alt', 'Desserts');
  meal2.setAttribute('class', 'image-meal');
  divImages.appendChild(meal2);

  content.appendChild(divImages);
}

export default home;