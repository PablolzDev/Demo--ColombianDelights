document.querySelectorAll(".slide-nav").forEach(navButton => {
    navButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
  
      const currentSlide = document.querySelector(".flex--active");
      const currentSlideData = currentSlide?.dataset.slide; // Optional chaining for null handling
  
      const nextSlideData = this.dataset.slide;
  
      // Remove active class from all nav buttons
      document.querySelectorAll(".slide-nav").forEach(button => button.classList.remove("active"));
  
      // Add active class to clicked button
      this.classList.add("active");
  
      if (currentSlideData === nextSlideData) {
        return; // Do nothing if clicking on the current slide
      }
  
      const nextSlide = document.querySelector(`.flex__container[data-slide="${nextSlideData}"]`);
  
      // Handle slide transitions with CSS classes (assuming CSS animations are defined)
      currentSlide.classList.add("animate--end");
      nextSlide.classList.add("flex--preStart");
  
      setTimeout(() => {
        nextSlide.classList.remove("animate--start", "flex--preStart");
        nextSlide.classList.add("flex--active");
  
        currentSlide.classList.remove("animate--end", "flex--active");
        currentSlide.classList.add("animate--start");
      }, 800);
    });
  });
  