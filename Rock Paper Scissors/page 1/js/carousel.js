document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const innerContainer = document.querySelector(".carousel-inner");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  let currentIndex = 0;
  let intervalId;

  function showImage(index) {
      const images = innerContainer.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
          images[i].classList.remove("active");
      }
      images[index].classList.add("active");
  }

  function prevImage() {
      currentIndex = (currentIndex - 1 + innerContainer.childElementCount) % innerContainer.childElementCount;
      showImage(currentIndex);
  }

  function nextImage() {
      currentIndex = (currentIndex + 1) % innerContainer.childElementCount;
      showImage(currentIndex);
  }

  function startAutoScroll() {
      intervalId = setInterval(() => {
          nextImage();
      }, 2000);
  }

  function stopAutoScroll() {
      clearInterval(intervalId);
  }
  prevButton.addEventListener("click", function() {
      stopAutoScroll(); // Moves the picture forward without autoscrolling
      prevImage();
  });
  nextButton.addEventListener("click", function() {
      stopAutoScroll();
      nextImage();
  });

  // Start on the first picture
  showImage(currentIndex);

  // Initialize scroll
  startAutoScroll();
});
