const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const randomBtn = document.getElementById("randomBtn");
const rocketBtn = document.getElementById("rocketBtn");

// Random exoplanet questions
const randomQuestions = [
  "What is an exoplanet?",
  "How do scientists discover exoplanets?",
  "Which exoplanet is closest to Earth?",
  "What is a habitable zone?",
  "Can humans survive on exoplanets?",
  "What missions are hunting exoplanets?",
  "How does the Transit Method work?",
  "What is the Kepler mission?",
  "What data does TESS provide?",
  "How can AI help in discovering exoplanets?"
];

// Secret facts about NASA Space Apps 2025 challenge
const secretFacts = [
  "🛰️ Kepler discovered over 2,600 exoplanets!",
  "🌌 Some exoplanets orbit two stars, like Tatooine!",
  "🔭 AI algorithms help find exoplanets faster than humans!",
  "💧 Habitable zones are where liquid water might exist.",
  "🚀 The 'World Away' challenge encourages citizen scientists to hunt exoplanets.",
  "🪐 The smallest confirmed exoplanet is smaller than Mercury.",
  "🌟 Some exoplanets are tidally locked to their star.",
  "🌕 Exoplanets can have multiple moons, some even bigger than Earth’s moon.",
  "💫 The TESS mission surveys the entire sky for nearby exoplanets.",
  "🛸 Rogue planets drift through space without orbiting a star."
];

// Greetings
const greetings = ["hello", "hi", "hey", "greetings"];

// Send message function
function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(message) {
  message = message.toLowerCase();
  let reply;

  if (greetings.some(g => message.includes(g))) {
    reply = "👋 Hello Explorer! Welcome to the World Away Exoplanet Hunt 🌌. Ask me anything about exoplanets!";
  }
  else if (message.includes("exoplanet")) {
    reply = "🌍 Exoplanets are planets that orbit stars beyond our Solar System.";
  }
  else if (message.includes("detect") || message.includes("discover")) {
    reply = "🔭 Scientists detect exoplanets using methods like the Transit Method and Radial Velocity.";
  }
  else if (message.includes("closest") || message.includes("nearest")) {
    reply = "🚀 The closest known exoplanet is Proxima Centauri b, about 4.24 light-years away.";
  }
  else if (message.includes("habitable")) {
    reply = "💧 The habitable zone is where a planet could have liquid water on its surface.";
  }
  else if (message.includes("mission") || message.includes("kepler") || message.includes("tess")) {
    reply = "🛰️ NASA missions like Kepler, K2, and TESS are designed to find and study exoplanets.";
  }
  else if (message.includes("ai")) {
    reply = "🤖 AI can help analyze vast amounts of data to detect exoplanets more efficiently!";
  }
  else if (message.includes("live") || message.includes("humans")) {
    reply = "🧬 Currently, humans cannot live on exoplanets, but scientists are exploring possibilities.";
  }
  else {
    reply = "🤔 Fascinating question! Let’s explore more about exoplanets together.";
  }

  appendMessage(reply, "bot");
}

// Send button
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (!message) return;
  appendMessage(message, "user");
  messageInput.value = "";
  setTimeout(() => generateBotReply(message), 800);
});

// Enter key
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendButton.click();
});

// Random question button
randomBtn.addEventListener("click", () => {
  const question = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
  appendMessage(question, "bot");
});

// Rocket button — fly and show secret fact
rocketBtn.addEventListener("click", () => {
  // Rocket animation
  const flyingRocket = rocketBtn.cloneNode(true);
  flyingRocket.classList.add("rocket-fly");
  document.body.appendChild(flyingRocket);
  flyingRocket.addEventListener("animationend", () => flyingRocket.remove());

  // Show random secret fact
  const fact = secretFacts[Math.floor(Math.random() * secretFacts.length)];
  appendMessage(fact, "bot");
});
