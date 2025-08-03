const toggle = document.getElementById("toggle");

// Check for saved user preference or use system preference
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Apply the saved theme
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  toggle.checked = true;
}

// Toggle function
toggle.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
});
