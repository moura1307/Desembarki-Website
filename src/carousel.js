document.addEventListener("DOMContentLoaded", () => {

  const slider = document.getElementById("slider");

  let index = 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;

  const totalImages = slider.children.length;

  function getVisibleImages() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getSlideWidth() {
    return slider.children[0].offsetWidth;
  }

  function getMaxIndex() {
    return totalImages - getVisibleImages();
  }

  function setPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function snapToIndex() {
    const slideWidth = getSlideWidth();
    currentTranslate = -index * slideWidth;
    prevTranslate = currentTranslate;
    slider.style.transition = "transform 0.3s ease";
    setPosition();
  }

  function nextSlide() {
    if (index >= getMaxIndex()) {
      index = 0;
    } else {
      index++;
    }
    snapToIndex();
  }

  // ================= DRAG =================

  function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  function startDrag(e) {
    clearInterval(autoSlide);
    isDragging = true;
    startX = getPositionX(e);
    slider.style.transition = "none";
    animationID = requestAnimationFrame(animation);
  }

  function animation() {
    setPosition();
    if (isDragging) requestAnimationFrame(animation);
  }

  function drag(e) {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    const diff = currentPosition - startX;
    currentTranslate = prevTranslate + diff;
  }

  function endDrag() {
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100 && index < getMaxIndex()) index++;
    if (movedBy > 100 && index > 0) index--;

    snapToIndex();

    autoSlide = setInterval(nextSlide, 3000);
  }

  // Events
  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("mousemove", drag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("mouseleave", () => isDragging && endDrag());

  slider.addEventListener("touchstart", startDrag);
  slider.addEventListener("touchmove", drag);
  slider.addEventListener("touchend", endDrag);

  // Prevent image dragging
  slider.querySelectorAll("img").forEach(img =>
    img.addEventListener("dragstart", e => e.preventDefault())
  );

  // Auto Slide
  let autoSlide = setInterval(nextSlide, 5000);

  // Reset position on resize
  window.addEventListener("resize", () => {
    index = 0;
    snapToIndex();
  });

});