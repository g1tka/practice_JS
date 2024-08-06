$(function(){
  $('.box1').mouseover(function(){
    // $('.box1').css({'background-color': '#0000FF'});
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    // $('.box1').css({'background-color': '#FF0000'});
    $('.box1').removeClass('box1-ext');
  });
});

$(function(){
  $('.box2').on('click', function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});

$(document).ready(function() {
  $('#toggleBox').click(function() {
    let $pElement = $(this).find('.text');
    if ($pElement.text() === 'もじ') {
        $pElement.text('文字').removeClass('text-blue').addClass('text-green');
    } else {
        $pElement.text('もじ').removeClass('text-green').addClass('text-blue');
    }
  });
});

$(document).ready(function() {
  // id=　全てのポスト
  $('span[id^="toggle-"]').click(function() {
    let $pElement = $(this).find('.text');
    if ($pElement.text() === '公開') {
      $pElement.text('非公開').removeClass('text-success').addClass('text-secondary');
    } else {
      $pElement.text('公開').removeClass('text-secondary').addClass('text-success');
    }
  });
});
