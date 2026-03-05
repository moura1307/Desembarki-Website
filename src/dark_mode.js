const toggles = document.querySelectorAll(".theme-toggle");

function updateToggle() {
    const isDark = document.documentElement.classList.contains("dark");

    toggles.forEach(toggle => {
        const circle = toggle.querySelector(".toggle-circle");

        if (isDark) {
            circle.style.transform = "translateX(24px)";
            circle.textContent = "🌙";
        } else {
            circle.style.transform = "translateX(0px)";
            circle.textContent = "☀️";
        }
    });
}

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateToggle();
    });
});

updateToggle();