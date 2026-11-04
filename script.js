const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

welcomeButton.addEventListener("click", function () {
  message.textContent = "Hello! Your JavaScript is working.";
});
