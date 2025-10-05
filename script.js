const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const randomBtn = document.getElementById("randomBtn");

const randomQuestions = [
  "What is an exoplanet?",
  "How are exoplanets discovered?",
  "What is the habitable zone?",
  "Which exoplanet is most like Earth?",
  "What is the Kepler mission?"
];

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

randomBtn.addEventListener("click", () => {
  const question = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
  messageInput.value = question;
  sendMessage();
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (!message) return;
  appendMessage(message, "user");
  messageInput.value = "";

  setTimeout(() => {
    generateBotReply(message);
  }, 800);
}

function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(message) {
  let reply;
  message = message.toLowerCase();

  if (message.includes("exoplanet")) {
    reply = "An exoplanet is a planet that orbits a star outside our solar system. 🌍✨";
  } else if (message.includes("discover")) {
    reply = "Scientists detect exoplanets using methods like the transit method and radial velocity. 🔭";
  } else if (message.includes("habitable")) {
    reply = "The habitable zone is the area around a star where conditions might allow liquid water to exist. 💧";
  } else if (message.includes("earth")) {
    reply = "Kepler-452b is often called Earth’s cousin because it’s similar in size and orbit. 🌎";
  } else if (message.includes("kepler")) {
    reply = "NASA’s Kepler mission was designed to find Earth-like planets around other stars. 🚀";
  } else {
    reply = "That’s an interesting question! Exoplanets are full of mysteries — let’s explore more! 🌌";
  }

  appendMessage(reply, "bot");
}
