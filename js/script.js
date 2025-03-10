document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slides");
  let dotsContainer = document.querySelector(".dots");
  let preveButton = document.querySelector(".prev");
  let nextButton = document.querySelector(".next");
  let slide = document.querySelectorAll(".slide");
  let currentSlide = slide.length;
  let currentSlideIndex = 0;

  // Create dots
  for (let i = 0; i < currentSlide; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("active");
    }
    dot.setAttribute("data-slide", i);
    dotsContainer.appendChild(dot);
  }

  let dots = document.querySelectorAll(".dot");

  function updateSlider(index) {
    if (index >= currentSlide) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = currentSlide - 1;
    } else {
      currentSlideIndex = index;
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });

    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    dots[currentSlideIndex].classList.add("active");
  }

  // Start auto slide
  function startAutoSlide() {
    autoslideInterval = setInterval(function () {
      updateSlider(currentSlideIndex + 1);
    }, 3000);
  }

  // Stop auto slide
  function stopAutoSlide() {
    clearInterval(autoslideInterval);
  }

  startAutoSlide();

  // Arrow Button Click Time Performance

  preveButton.addEventListener("click", function () {
    stopAutoSlide();
    updateSlider(currentSlideIndex);
    startAutoSlide();
  });

  nextButton.addEventListener("click", function () {
    stopAutoSlide();
    updateSlider(currentSlideIndex);
    startAutoSlide();
  });

  // Dot Button Click Time Performance
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      stopAutoSlide();
      let index = parseInt(dot.getAttribute("data-slide"));
      updateSlider(index);
      startAutoSlide();
    });
  });

  preveButton.addEventListener("click", function () {
    updateSlider(currentSlideIndex - 1);
  });
  nextButton.addEventListener("click", function () {
    updateSlider(currentSlideIndex + 1);
  });

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      let index = parseInt(dot.getAttribute("data-slide"));
      updateSlider(index);
    });
  });
});
