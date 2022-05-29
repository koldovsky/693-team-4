(function() {
    const slides = [
        '<div class="slide"><img src="img/wine-products/cabarnet.jpeg" alt="Cabarnet"></div>',
        '<div class="slide"><img src="img/wine-products/sauvignon-blanc.jpeg" alt="Sauvignon Blanc"></div>',
        '<div class="slide"><img src="img/wine-products/syrah.jpeg" alt="Syrah"></div>',
        '<div class="slide"><img src="img/wine-products/pinot-grigio.jpeg" alt="Pinot Grigio"></div>'
     ]; 
  

    let currentSlide = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.wine-products-carousel .slide')
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth >= 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth >= 900) {
              const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
              slideContainer.innerHTML += slides[thirdSlide];              
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 >= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel();
    }

    renderCarousel();

        const btnForward = document.querySelector('.wine-products-carousel .forward')
        btnForward.addEventListener('click', nextSlide);
        
        const btnBack = document.querySelector('.wine-products-carousel .back')
        btnBack.addEventListener('click', prevSlide);

        window.addEventListener('resize', renderCarousel);

})(); 