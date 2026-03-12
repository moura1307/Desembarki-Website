const track = document.getElementById("carousel-track");
const items = document.querySelectorAll(".carousel-item");

let index = 0;

function getVisibleItems() {
    if (window.innerWidth < 768) return 1;      // mobile
    if (window.innerWidth < 1024) return 2;     // md
    return 5;                                   // lg
}

function updateCarousel() {

    const visible = getVisibleItems();
    const total = items.length;

    if (index > total - visible) {
        index = total - visible;
    }

    const offset = index * (100 / visible);
    track.style.transform = `translateX(-${offset}%)`;
}

document.getElementById("next").onclick = () => {
    const visible = getVisibleItems();
    const total = items.length;

    index++;

    if (index > total - visible) {
        index = 0;
    }

    updateCarousel();
};

document.getElementById("prev").onclick = () => {
    const visible = getVisibleItems();
    const total = items.length;

    index--;

    if (index < 0) {
        index = total - visible;
    }

    updateCarousel();
};

window.addEventListener("resize", updateCarousel);