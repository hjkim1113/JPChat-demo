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

function goto_form() {
  const modal = new bootstrap.Modal(
    document.getElementById("applicationModal")
  );
  modal.show();
}