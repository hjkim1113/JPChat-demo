"use strict";

const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = chatInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  chatInput.value = "";

  setTimeout(() => {
    addMessage(
      "bot",
      "이것은 예시 응답입니다.\nLLM API를 연결하면 실제 응답이 들어옵니다."
    );
  }, 500);
});

function addMessage(type, text) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  msg.appendChild(bubble);
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function btnClick(el) {
  const $el = $(el);

  if ($el.hasClass("active")) {
    $(".chat-action-bar button").removeClass("active");
    $(".main-title").html("통합 상담");
    return;
  }

  $(".chat-action-bar button").removeClass("active");
  $el.addClass("active");
  getSelectedField();
}

function getSelectedField() {
  const $btn = $(".chat-action-bar button.active");
  let btnText = $btn.length ? $btn.text().trim() : null;

  $(".main-title").html(btnText + " 상담");
}

$("#summaryToggle").on("click", function () {
  $("#leftSummary").toggleClass("show");
});

