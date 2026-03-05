const toggle = document.getElementById("theme-toggle");
const circle = document.getElementById("toggle-circle");

function updateToggle() {
    if (document.documentElement.classList.contains("dark")) {
        circle.style.transform = "translateX(24px)";
        circle.textContent = "🌙";
    } else {
        circle.style.transform = "translateX(0px)";
        circle.textContent = "☀️";
    }
}

updateToggle();

toggle.addEventListener("click", () => {

    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateToggle();
});