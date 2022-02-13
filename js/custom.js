$(document).ready(function () {
  $(".wrapper").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    slideTransition: "linear",
    //   autoplayTimeout: 3000,
    //   autoplaySpeed: 2000,
    //   autoplay:true
  });
  $(".faculty-wrapper").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".traine-main").owlCarousel({
    loop: true,
    margin: 24,
 //   autoplayTimeout: 3000,
      autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 6,
      },
    },
  });


  $(window).on("scroll", function () {
    console.log('HIiii')
    alert('hiiii')
    var scroll = $(window).scrollTop();
    console.log(scroll)
    let navHeight = $(".header").height();
    if (scroll > navHeight) {
      $(".custom_nav").css("background-color", "rgba(37,139,71,1)");
    } else {
      $(".custom_nav").css("background", "transparent");
    }
  });
});



$(window).scroll((e) => {
  // Detect how far are we from the top of the page
  let windowTop = $(window).scrollTop();
  // Loop through every navigation menu item
  $(".navbar-nav a").each(function (event) {
    // Check for the current navigation item associated section
    // Check how far the associated section is from the top
    // If the associated section is as far as the user have scrolled, add 'active' class to the item.
    if (windowTop >= $($(this).attr("href")).offset().top - 200) {
      // Remove 'active' from previously highlighted menu items
      $(".navbar-nav .active").removeClass("active");

      // Highlight the current menu item by adding 'active' class
      $(this).addClass("active");
    }
  });
});

$(".navbar-nav a").each(function (e) {
  $(this).on("click", function (e) {
    e.preventDefault();

    console.log(this.getAttribute("href"));

    const id = this.getAttribute("href").split("#")[1];

    console.log(id);

    var element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behaviour: "smooth",
    });
  });
});



jQuery(document).ready(function ($) {
  $('#student-testimonial').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 20,
    // autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(document).ready(function () {

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

});