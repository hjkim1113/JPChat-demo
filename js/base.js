"use strict";

function loadModule(targetId, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    });
}

function page_redirect(el) {
  const href = el.dataset.href;
  window.location.href = href;
}