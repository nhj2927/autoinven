imageLoader = (file) => {
  sel_files.push(file);
  var reader = new FileReader();
  reader.onload = (e) => {
    let img = document.createElement('img');
    img.setAttribute('style', img_style);
    img.src = e.target.result;
    attZone.appendChild(makeDiv(img, file));
  };

  reader.readAsDataURL(file);

  placeholerObserver();
};
