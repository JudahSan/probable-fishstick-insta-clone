import Flickity from 'flickity';

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carousel) => {
    const flickity = new Flickity(carousel, {
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 4000,
      draggable: true,
      pauseAutoPlayOnHover: true
    });
    
    const prevButton = carousel.querySelector('.carousel-prev');
    prevButton.addEventListener('click', () => {
      flickity.previous();
    });
    
    const nextButton = carousel.querySelector('.carousel-next');
    nextButton.addEventListener('click', () => {
      flickity.next();
    });
  });
});
