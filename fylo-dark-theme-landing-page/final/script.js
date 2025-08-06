const formEl = document.querySelector("#form");
const emailnp = document.querySelector("#emailInp");
const errorEl = document.querySelector(".error");
const noteEl = document.querySelector(".note");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  valdaiteEmail(emailnp);
});

function valdaiteEmail(emailnp) {
  const emailRgex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = emailnp.value;

  if (emailRgex.test(emailValue)) {
    hideError();
    emailnp.value = "";
  } else {
    showError();
  }
}

function showError() {
  errorEl.classList.add("hidden");
  errorEl.classList.remove("show-anm");
  errorEl.classList.remove("hide-anm");

  setTimeout(() => {
    errorEl.classList.remove("hidden");
    errorEl.classList.add("show-anm");
  }, 10);
}

function hideError() {
  errorEl.classList.remove("show-anm");
  errorEl.classList.add("hide-anm");

  noteEl.classList.remove("hidden");
  noteEl.classList.remove("hide-note");
  noteEl.classList.add("show-note");

  setTimeout(() => {
    errorEl.classList.add("hidden");
    errorEl.classList.remove("hide-anm");
  }, 500);

  setTimeout(() => {
    noteEl.classList.add("hide-note");
    noteEl.classList.remove("show-note");

    setTimeout(() => {
      noteEl.classList.add("hidden");
    }, 500);
  }, 1000);
}
