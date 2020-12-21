const create_anchor = (text, anchor_class) => {
  let anchor = document.createElement('li');
  let anchor_link = document.createElement('a');
  anchor_link.setAttribute('href', "#");
  anchor_link.setAttribute('data-id', text);
  anchor_link.innerText = text;
  anchor_link.setAttribute('class', 'nav-link active');
  anchor.appendChild(anchor_link);
  anchor.setAttribute('class', anchor_class);

  return anchor;
}

export default create_anchor;