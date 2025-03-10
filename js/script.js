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
    setTimeout(showSlides, 2000); // Change image every 3 seconds
  }

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
  function showSlides() {
    updateSlider(currentSlideIndex + 1);
  }
  setTimeout(showSlides, 2000);
});
