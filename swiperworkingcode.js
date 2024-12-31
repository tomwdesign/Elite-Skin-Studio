<script>
  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    // Swiper options
    navigation: {
      nextEl: '.swiper-next', // Next slide button
      prevEl: '.swiper-prev', // Previous slide button
      disabledClass: "is-disabled", // Disabled class for navigation buttons
    },
    scrollbar: {
      el: '.swiper-scrollbar', // Corrected: use class selector directly
      draggable: true, // Make scrollbar draggable
      dragClass: "swiper-drag", // Custom drag class
      snapOnRelease: true, // Snap back when released
    },
    slidesPerView: 1, // Default slide count per view (1 slide at a time)
    keyboard: true, // Enable keyboard navigation
    mousewheel: {
      forceToAxis: true, // Ensure mousewheel scroll is restricted to one axis
    },
    freemode: true, // Enable free mode (slides can be moved freely)
    slideToClickSlide: true, // Slides to a slide when clicked
    spaceBetween: 16, // Space between slides (number, not string)
    speed: 450,
    breakpoints: {
      // Mobile (480px and up)
      480: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      // Tablet (768px and up)
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      // Desktop (992px and up)
      992: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    } // Close the breakpoints object
  });
</script>
