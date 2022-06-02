
(function () {
   const slides = [
      '<div class="slide"><img src="img/main/main-banner-bottle.png" alt="bottle"></div>',
      '<div class="slide"><img src="img/main/giphy.gif" alt="glass"></div>'
   ];
   
   let currentSlide = 0;
   function renderAnimation() {
      const slideContainer = document.querySelector('.wine-animation .slide');
      slideContainer.innerHTML = slides[currentSlide];
   }

   function nextSlide() {
      currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
      renderAnimation();
   }

   function prevSlide() {
      currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
      renderCarousel();
   }

   renderAnimation();

   const showAnimation = document.querySelector('.wine-animation .slide');
   showAnimation.addEventListener('mouseenter', nextSlide);

   const hideAnimation = document.querySelector('.wine-animation .slide');
   hideAnimation.addEventListener('mouseout', prevSlide);

})();