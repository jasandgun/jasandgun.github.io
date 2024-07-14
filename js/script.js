document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");
  const favicon = document.getElementById("favicon");
  const githubIcon = document.getElementById("github-icon");
  const emailIcon = document.getElementById("email-icon");

  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;

    if (themeName === "dark-mode") {
      favicon.href = "assets/favicon-dark.ico";
      githubIcon.src = "assets/github-mark-dark.svg";
      emailIcon.src = "assets/email-dark.svg";
      themeIcon.innerHTML = `
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            `;
    } else {
      favicon.href = "assets/favicon-light.ico";
      githubIcon.src = "assets/github-mark-light.svg";
      emailIcon.src = "assets/email-light.svg";
      themeIcon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
    }
  }

  function toggleTheme() {
    if (localStorage.getItem("theme") === "dark-mode") {
      setTheme("light-mode");
    } else {
      setTheme("dark-mode");
    }
  }

  (function () {
    if (localStorage.getItem("theme") === "dark-mode") {
      setTheme("dark-mode");
    } else if (localStorage.getItem("theme") === "light-mode") {
      setTheme("light-mode");
    } else {
      // If no theme is set, check system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark-mode");
      } else {
        setTheme("light-mode");
      }
    }
  })();

  themeToggle.addEventListener("click", toggleTheme);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark-mode" : "light-mode");
      }
    });
});
