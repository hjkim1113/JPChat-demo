"use strict";

const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = chatInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  chatInput.value = "";

  // 더미 응답 (나중에 API 연결)
  setTimeout(() => {
    addMessage("bot", "이것은 예시 응답입니다.\nLLM API를 연결하면 실제 응답이 들어옵니다.");
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

function goto_form() {
  const modal = new bootstrap.Modal(
    document.getElementById("applicationModal")
  );
  modal.show();
}