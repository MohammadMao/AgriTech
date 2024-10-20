$(function(){
    var navbar = $('.header-inner');

    $(window).scroll(function(){
      if($(window).scrollTop() <= 40){
        navbar.removeClass('navbar-scroll');

      }else{
        navbar.addClass('navbar-scroll');
      }
    });
  });

  let burger = document.getElementById("burger-button");

  burger.addEventListener("click", (e) =>{
    e.preventDefault();
    document.body.classList.toggle("open");
    burger.classList.toggle("open");
  });

  $(document).ready(function(){
    $('.navbar-toggler,.overlay').on("click",function(){
      $(".mobile-menu,.overlay").toggleClass('open');
    });
  });

