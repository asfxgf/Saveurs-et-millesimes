const initCarousel = () => {

// Home carousel 1 du top
  let carousel = document.querySelectorAll('#carouselExampleSlidesOnly');

  if (carousel) {
    let currentCarousel = 0;

    const goToCarousel = (s) => {

      carousel[currentCarousel].className = 'carousel-item';


      currentCarousel = (s + carousel.length) % carousel.length;

      carousel[currentCarousel].className = 'carousel-item active';
    }

    const nextCarousel = () => {
      goToCarousel(currentCarousel + 1);
    }
    setInterval(nextCarousel, 1000);
  }
}

export { initCarousel };
