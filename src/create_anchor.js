const createAnchor = (text, anchorClass) => {
  const anchor = document.createElement('li');
  const anchorLink = document.createElement('a');
  anchorLink.setAttribute('href', '#');
  anchorLink.setAttribute('data-id', text);
  anchorLink.innerText = text;
  anchorLink.setAttribute('class', 'nav-link active');
  anchor.appendChild(anchorLink);
  anchor.setAttribute('class', anchorClass);

  return anchor;
};

export default createAnchor;