const path = require('path');

module.exports = (Franz, options) => {
  Franz.injectCSS(path.join(__dirname, 'sizeFixed.css'));
  Franz.injectCSS(path.join(__dirname, 'darkmode.css'));

  let locationTemp = window.location.href;

  function changeLocation(location) {
    if (location.includes('/home'))  {
      window.location.href = `https://m.facebook.com/groups/${options.team}&ref=bookmarks`;
    }
  }

  function changeLocationTemp() {
    if (locationTemp !== window.location.href) {
      locationTemp = window.location.href;
      changeLocation(locationTemp);
    }
  }

  function addListnerOnBody(event) {
    document.body.addEventListener('DOMSubtreeModified', changeLocationTemp, false);
  }

  document.addEventListener("DOMContentLoaded", addListnerOnBody);
};