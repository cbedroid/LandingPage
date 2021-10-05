$(document).ready(() => {
  (function navScrollObserver() {
    let options = {};

    let target = document.querySelector("#showcase");
    let callback = (entries, observer) => {
      entries.forEach((entry) => {
        // Toggle Site Navigation active
        $("#site-nav").addClass("active");
        if (entry.isIntersecting) {
          $("#site-nav").removeClass("active");
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  })();

  (function handleProductThumbHover() {
    /* product thumb image hover effect  */
    $("#apparel .card .card-img").each(function () {
      const product_image = this;
      const imgthumbs = $(this)
        .parent()
        .find(".product-detail .product__imgthumb");

      /* Bind hover and click events to each product thumbnails
         and set product main image src
      */
      $(imgthumbs).bind("click touch mouseover", function () {
        $(imgthumbs).removeClass("active");
        $(this).addClass("active");
        // set the thumbnail image to main product image
        product_image.src = this.src;
      });
    });
  })();

  (function lightSliderCarousel() {
    $("#trend #trend-card").lightSlider({
      item: window.innerWidth >= 426 ? 2 : 1,
      autoWidth: false,
      slideMove: 1, // slidemove will be 1 if loop is true
      slideMargin: 10,

      addClass: "",
      mode: "slide",
      useCSS: true,
      cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
      easing: "linear", //'for jquery animation',////

      speed: 400, //ms'
      auto: false,
      loop: false,
      slideEndAnimation: true,
      pause: 2000,

      keyPress: false,
      controls: true,
      prevHtml: "",
      nextHtml: "",

      rtl: false,
      adaptiveHeight: false,

      vertical: false,
      verticalHeight: 500,
      vThumbWidth: 100,

      thumbItem: 10,
      pager: true,
      gallery: false,
      galleryMargin: 5,
      thumbMargin: 5,
      currentPagerPosition: "middle",

      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      swipeThreshold: 40,

      responsive: [],
    });
  })();
});
