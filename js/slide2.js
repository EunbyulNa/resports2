$(function() {
var $headerTop = $('header').offset().top; //a가 위에서부터 거리가 얼마인지
var scroll = $(window).scrollTop();//스크롤된거$
console.log($headerTop);

$(window).scroll(function () {
var scroll = $(window).scrollTop();

if(scroll> $headerTop) {
  $('header').hide();
  $('#move').show();
}else {
  $('header').show();
  $('#move').hide();
}


});//스크롤끝

//nav 슬라이드
$('.depth1').mouseenter(function () {
  $(this).find('.depth2').stop().fadeIn(500);
 $(this).find('a').addClass('on');
});

$('.depth1').mouseleave(function () {
  $(this).find('.depth2').stop().fadeOut(500);
  $(this).find('a').removeClass('on');
});





});//fun
