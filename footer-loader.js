/* Loads the single shared footer into each page. */
(function () {
  'use strict';

  const mount = document.getElementById('site-footer-placeholder');
  if (!mount) return;

  fetch('footer.html')
    .then(function (response) {
      if (!response.ok) throw new Error('Could not load footer.html');
      return response.text();
    })
    .then(function (html) {
      mount.innerHTML = html;
    })
    .catch(function (error) {
      console.error('Shared footer failed to load:', error);
    });
})();
