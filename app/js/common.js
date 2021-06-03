document.addEventListener("DOMContentLoaded", initJs())



function initJs() {

  const d = document;
  const w = window;
  const question = d.querySelector('.question-box');
  const services = d.querySelector('.services-box');



// POPUP
  d.querySelectorAll('.header__button').forEach(el => {
    el.addEventListener('click', e => {
                document.querySelector('.question-box').style.visibility = "visible";
                document.querySelector('.question-box').style.display = "block";
                document.body.style.overflow = "hidden";
    });
  });
  if(question) {
    question.addEventListener('click', e => {
      if	(e.target.classList.contains("question-box") || e.target.classList.contains("question-box__inner") || e.target.classList.contains("question-box__close")){
          document.querySelector('.question-box').style.visibility = "hidden";
          document.body.style.overflow = "auto";
      }})}
  

  document.querySelectorAll('.info__grid-btn').forEach(el => {
    el.addEventListener('click', e => {
                document.querySelector('.services-box').style.visibility = "visible";
                document.querySelector('.services-box').style.display = "block";
                document.body.style.overflow = "hidden";
    });
  });
  if(services) {
    services.addEventListener('click', e => {
      if	(e.target.classList.contains("services-box") || e.target.classList.contains("services-box__inner") || e.target.classList.contains("services-box__close")){
          document.querySelector('.services-box').style.visibility = "hidden";
          document.body.style.overflow = "auto";
      }})}
    };
  


  // CLOSE bloc
  let closeBtn = document.querySelector('.portfolio__tel-close');
  if(closeBtn) {
    closeBtn.addEventListener('click', close);
    function close() {
   document.querySelector('.portfolio__tel').style.display = 'none';
    };
  };

  


  jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
 if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
 $('a[href="#'+id+'"]').addClass('active');

   }
})
});

$("nav").on("click","a", function (event) {
   // исключаем стандартную реакцию браузера
   event.preventDefault();

   // получем идентификатор блока из атрибута href
   var id  = $(this).attr('href'),

   // находим высоту, на которой расположен блок
       top = $(id).offset().top;
    
   // анимируем переход к блоку, время: 800 мс
   $('body,html').animate({scrollTop: top}, 800);
});





















$(document).ready(function() {

    /* Main-slider START */
    let mnav = true;
    $('.top__slider').on('init', function () {
      if (!($('.top__slider .slick-slide').length > 1)) {
        mnav = false;
        $('.top__slider__navigation').hide();
      }
    });
  
    $('.top__slider').slick({
      autoplay: true,
      autoplaySpeed: 8000,
      pauseOnHover: false,
      fade: false,
      speed: 0,
      dots: true,
      swipe: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots:$(".top__slider__dots"),
    });
  
    $('.top__slider__arrow--top').click(function(){
      $('.top__slider').slick('slickPrev');
    });
  
    $('.top__slider__arrow--bottom').click(function(){
      $('.top__slider').slick('slickNext');
    });
  
   /* Main-slider END */
  
    if (mnav) {
      /* Timer Circle for Main Slider */
      function Circle(){
        var can = document.getElementById('canvas'),
             c = can.getContext('2d');
       
        var posX = can.width / 2,
            posY = can.height / 2,
            fps = 23,
            procent = 0,
            oneProcent = 360 / 100,
            result = oneProcent * 100;
  
        c.lineCap = 'round';
  
          var deegres = 0;
          var acrInterval = setInterval (function() {
            deegres += 1;
            c.clearRect( 0, 0, can.width, can.height );
            procent = deegres / oneProcent;
  
            c.beginPath();
            c.arc( posX, posY, 9, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
            c.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            c.lineWidth = '1';
            c.stroke();
  
            c.beginPath();
            c.strokeStyle = '#fff';
            c.lineWidth = '2';
            c.arc( posX, posY, 9, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
            c.stroke();
            if( deegres >= result ) clearInterval(acrInterval);
          }, fps);
      }
  
      $('.top__slider__dots li.slick-active').append('<canvas id="canvas" width="22" height="22"></canvas>');
      Circle();
  
      $('.top__slider').on('afterChange', function(event, slick, currentSlide){
        $('.top__slider__dots li').each(function(){
          $(this).children().remove("#canvas");
        });
        $('.top__slider__dots li.slick-active').append('<canvas id="canvas" width="22" height="22"></canvas>');
        Circle();
      });
      /* Timer Circle for Main Slider END */
    }

  });
