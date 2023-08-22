// Loading Infinity
const snniper = document.querySelector('.lds-spinner');
function load() {
  snniper.classList.remove('d-flex');
  snniper.classList.add('d-none');
}

// Accordion Menu Eduction Page
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', () => {
    accordionHeader.classList.toggle('acvtive-accordion');
  });
});


var topMenuMoblie = document.querySelector(".menu .hamberger");
var menuMoblie = document.querySelector(".menu");

topMenuMoblie.addEventListener('click' , function(){
  menuMoblie.classList.toggle("active");
})


const btn = document.querySelector(".myBtn")
const SearchBox = document.querySelector(".fullScreen")
const closeBtn = document.querySelector(".closeBtn")
 
 
closeBtn.addEventListener("click", ()=>{
    SearchBox.style.transform = "translateY(-100px)"
})
 
btn.addEventListener('click', ()=>{
    SearchBox.style.transform = "translateY(0)"
})
// ! Library Carousel
// work in progress - needs some refactoring and will drop JQuery i promise :)
// var instance = $(".hs__wrapper");
// $.each( instance, function(key, value) {

//   var arrows = $(instance[key]).find(".arrow"),
//       prevArrow = arrows.filter('.arrow-prev'),
//       nextArrow = arrows.filter('.arrow-next'),
//       box = $(instance[key]).find(".hs"),
//       x = 0,
//       mx = 0,
//       maxScrollWidth = box[0].scrollWidth - (box[0].clientWidth / 2) - (box.width() / 2);

//   $(arrows).on('click', function() {

//     if ($(this).hasClass("arrow-next")) {
//       x = ((box.width() / 2)) + box.scrollLeft() - 10;
//       box.animate({
//         scrollLeft: x,
//       })
//     } else {
//       x = ((box.width() / 2)) - box.scrollLeft() -10;
//       box.animate({
//         scrollLeft: -x,
//       })
//     }

//   });

//   $(box).on({
//     mousemove: function(e) {
//       var mx2 = e.pageX - this.offsetLeft;
//       if(mx) this.scrollLeft = this.sx + mx - mx2;
//     },
//     mousedown: function(e) {
//       this.sx = this.scrollLeft;
//       mx = e.pageX - this.offsetLeft;
//     },
//     scroll: function() {
//       toggleArrows();
//     }
//   });

//   $(document).on("mouseup", function(){
//     mx = 0;
//   });

//   function toggleArrows() {
//     if(box.scrollLeft() > maxScrollWidth - 10) {
//         // disable next button when right end has reached
//         nextArrow.addClass('disabled');
//       } else if(box.scrollLeft() < 10) {
//         // disable prev button when left end has reached
//         prevArrow.addClass('disabled')
//       } else{
//         // both are enabled
//         nextArrow.removeClass('disabled');
//         prevArrow.removeClass('disabled');
//       }
//   }

// });

$(document).ready(function () {
  // Conrtoll Position Info Course Eduction Page
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 60) {
      $('.info-course').css('top', '5.2rem');
    } else {
      $('.info-course').css('top', '9.57rem');
    }
  });

  if ($(document).width() <= 768) {
    $('.info-course').removeClass('position-fixed');
  }

  // Control Button Course Eduction Page (Participate in the Course)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $('.cta-btn').css({
        bottom: '2.7rem',
        visibility: 'visible',
      });
    } else {
      $('.cta-btn').css({
        bottom: '-2rem',
        visibility: 'hidden',
      });
    }
  });

  // Scroll Page on Title of Detailes in Eductoin Page (Click on Tag a)
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      500
    );
  });

  //  Actions Navbar (Search)
  const searchBtn = $('.search-btn');
  const searchInput = $('.search-input');
  const activeClass = 'active-input';

  //  Actions Navbar (Hamber Menu)
  const wrapperHamber = $('.hamberger');
  const hamber = $('.hamber');
  const firstHamber = $('.hamber-1');
  const secondHamber = $('.hamber-2');
  const thirdHamber = $('.hamber-3');

  //  Actions Navbar (Overlay & Menu)
  const overlay = $('.overlay');
  const menu = $('.wrapper-item');

  //  Actions Navbar (Search)
  searchBtn.click(() => {
    searchInput.toggleClass(activeClass);
  });

  searchInput.focusout(() => {
    searchInput.removeClass(activeClass);
  });

  //  Actions Navbar (Hamber Menu)
  wrapperHamber.click(function () {
    firstHamber.toggleClass('active-hamber-1');
    secondHamber.toggleClass('active-hamber-2');
    thirdHamber.toggleClass('active-hamber-3');

    menu.toggleClass('open-menu');

    overlay.toggleClass('open-overlay');
  });

  //  Actions Navbar (Overlay & Menu)
  overlay.click(function () {
    overlay.removeClass('open-overlay');
    menu.removeClass('open-menu');
    // items.removeClass('moveup-menu');
    firstHamber.removeClass('active-hamber-1');
    secondHamber.removeClass('active-hamber-2');
    thirdHamber.removeClass('active-hamber-3');
    hamber.removeClass('white-color');
  });

  // Services Item in Menu
  const services = $('.sevrices-wrapper');
  const servicesMenu = $('.sevrices-wrapper ul');
  const chevron = $('.sevrices-wrapper .services .chevron');

  if (761 > 760) {
    services.click(function () {
      servicesMenu.slideToggle();
      chevron.toggleClass('rotate');
    });
  }

  // Control Like & Dislike
  const like = $('.like i');
  const disLike = $('.dislike i');

  like.click(function () {
    like.toggleClass('fa-regular');
    like.toggleClass('fa-solid');
  });

  disLike.click(function () {
    disLike.toggleClass('fa-regular');
    disLike.toggleClass('fa-solid');
  });

  // Confrirm Comment and Validity
  const confirmBtn = $('.confirm-btn');
  const commentArea = $('.comment-area');
  confirmBtn.click(function () {
    const valueFiled = commentArea.val();
    if (valueFiled == '') {
      setTimeout(() => {
        Swal.fire({
          position: 'top',
          title: 'خطأ!',
          text: 'يرجى ملء الحقل المطلوب',
          icon: 'error',
          confirmButtonText: 'نعم',
        });
      });
    } else {
      setTimeout(() => {
        Swal.fire({
          position: 'top',
          title: 'تم تسجيل تعليقك بنجاح.',
          text: 'سيتم نشره بعد الموافقة على تعليقك.',
          icon: 'success',
          confirmButtonText: 'نعم',
        });
      });
    }
  });

  // Like Page Content Frist Group
  const heart = $('.wrapper-heart');

  heart.click(function () {
    heart.children('i').toggleClass('fa-regular');
    heart.children('i').toggleClass('fa-solid');
  });

  //----------- shop logic -------
  const favorite = $('.product-picture .favorite i');

  favorite.click(function () {
    favorite.toggleClass('fa-solid');
    favorite.toggleClass('favorite-toggle');
  });

  const pictureItems = $('.product-picture .zoom-click');
  const pictureItemsFirst = $('.product-picture .zoom-click:first');

  pictureItemsFirst.addClass('active-img');

  pictureItems.click(function () {
    if (!$(this).hasClass('active-img')) {
      $('.zoom-click.active-img').removeClass('active-img');
      $(this).addClass('active-img');
    }
  });

  //----------- shop cart logic -------
  const count = $('.count');
  const trash = $('.count .remove');
  const minus = $('.count .decrement');
  const plus = $('.count .increment');
  const add = $('.add');
  let price = $('.price span');

  let num = 1;

  $('.cart').click(() => {
    add.addClass('d-none');
    count.removeClass('d-none');
    count.addClass('d-flex');
    $('.count div').text(num);
  });

  plus.click(() => {
    num++;
    if (num == 2) {
      price.text('2.100.000');
    }
    if (num >= 3) {
      num = 3;
      price.text('3.150.000');
    }
    if (num > 1) {
      trash.addClass('d-none');
      minus.removeClass('d-none');
    }
  });

  minus.click(() => {
    num--;
    if (num == 1) {
      minus.addClass('d-none');
      trash.removeClass('d-none');
      price.text('1.050.000');
    }
    if (num == 2) {
      price.text('2.100.000');
    }
    if (num <= 0) {
      num = 1;
    }
  });

  trash.click((event) => {
    event.stopPropagation();
    if (add.hasClass('d-none')) {
      add.removeClass('d-none');
    }
    if (!count.hasClass('d-none')) {
      count.addClass('d-none');
      count.removeClass('d-flex');
    }
  });

  //------------favorite actions----------
  const fadeOut = $('.favorites .trash');

  fadeOut.each(() => {
    fadeOut.click(() => {
      fadeOut.parentsUntil('section').fadeOut();
    });
  });

  // Book Details fixing bottom logic when window is scrolled down or up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      $('.book__reading.fix').css({
        visibility: 'visible',
        opacity: 1,
      });
    } else {
      $('.book__reading.fix').css({
        visibility: 'hidden',
        opacity: 0,
      });
    }
  });

  // LIBRARY
  $('.drop').mouseover(function () {
    $('.dropdown1').slideDown(300);
  });
  $('.drop').mouseleave(function () {
    $('.dropdown1').slideUp(300);
  });

  $('.drop2').mouseover(function () {
    $('.dropdown2').slideDown(300);
  });
  $('.drop2').mouseleave(function () {
    $('.dropdown2').slideUp(300);
  });

  $('.drop3').mouseover(function () {
    $('.dropdown3').slideDown(300);
  });
  $('.drop3').mouseleave(function () {
    $('.dropdown3').slideUp(300);
  });

  $('.drop4').mouseover(function () {
    $('.dropdown4').slideDown(300);
  });
  $('.drop4').mouseleave(function () {
    $('.dropdown4').slideUp(300);
  });
});

// Library functions
// ! Library Navbar
// search-box open close js code
let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search');
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener('click', () => {
  navbar.classList.toggle('showInput');
  if (navbar.classList.contains('showInput')) {
    searchBox.classList.replace('bx-search', 'bx-x');
  } else {
    searchBox.classList.replace('bx-x', 'bx-search');
  }
});

// sidebar open close js code
let navLinks = document.querySelector('.nav-links');
let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let menuCloseBtn = document.querySelector('.nav-links .bx-x');
menuOpenBtn.onclick = function () {
  navLinks.style.left = '0';
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = '-100%';
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector('.title__submenu');
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle('show1');
};

let jsArrow = document.querySelector('.title__submenu2');
jsArrow.onclick = function () {
  navLinks.classList.toggle('show3');
};

let jsArrow2 = document.querySelector('.title__submenu3');
jsArrow2.onclick = function () {
  navLinks.classList.toggle('show4');
};

let jsArrow3 = document.querySelector('.title__submenu4');
jsArrow3.onclick = function () {
  navLinks.classList.toggle('show5');
};



