$('.arrow_next_1').click(function(){
  $('#slider-content-container-1').fadeOut("slow");
  $('#slider-content-container-2').fadeIn("slow");
});

$('.arrow_prev_1').click(function(){
  $('#slider-content-container-2').fadeOut("slow");
  $('#slider-content-container-1').fadeIn("slow");
});

$('.arrow_next_2').click(function(){
  $('#slider-content-container-3').fadeOut("slow");
  $('#slider-content-container-4').fadeIn("slow");
});

$('.arrow_prev_2').click(function(){
  $('#slider-content-container-4').fadeOut("slow");
  $('#slider-content-container-3').fadeIn("slow");
});
