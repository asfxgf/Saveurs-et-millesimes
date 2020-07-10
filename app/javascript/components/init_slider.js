const initSlider = () => {

// Home carousel 1 du top
  let slides = document.querySelectorAll('#all_slides .slide1');

  if (slides) {
    let currentSlide = 0;

    const goToSlide = (s) => {

      slides[currentSlide].className = 'slide1';


      currentSlide = (s + slides.length) % slides.length;

      slides[currentSlide].className = 'slide1 active';
    }

    const nextSlide = () => {
      goToSlide(currentSlide + 1);
    }
    setInterval(nextSlide, 3000);
  }
}

export { initSlider };
