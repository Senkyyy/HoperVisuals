const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const response = document.getElementById("response");
const feedbackForm = document.getElementById("feedbackForm");

function setCurrentYear() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

function updateThemeButton() {
  if (body.classList.contains("dark-theme")) {
    themeToggle.textContent = "Светлая тема";
  } else {
    themeToggle.textContent = "Тёмная тема";
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("site-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
  }
  updateThemeButton();
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");
  localStorage.setItem("site-theme", isDark ? "dark" : "light");
  updateThemeButton();
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    response.style.display = "block";
    response.style.background = "#fecaca";
    response.style.color = "#991b1b";
    response.textContent = "Пожалуйста, заполните оба поля.";
    return;
  }

  response.style.display = "block";
  response.style.background = "#fef9c3";
  response.style.color = "#92400e";
  response.textContent = "Ваш отзыв будет отправлен примерно через 10 минут...";

  feedbackForm.reset();

  setTimeout(() => {
    response.style.background = "#d1fae5";
    response.style.color = "#065f46";
    response.textContent = `Спасибо, ${name}! Ваш отзыв сохранён: ${message}`;
  }, 10 * 60 * 1000); // 10 минут

});

setCurrentYear();
initTheme();
