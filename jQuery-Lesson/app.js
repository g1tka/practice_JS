// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
//   // $( セレクタ ).メソッド ( パラメータ );
// });

// bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい。という意味

// 基本の書き方
// $(document).ready(function () {
//   // jQueryプログラムの内容
// });
// もしくは省略形
// $(function(){
//   // jQueryプログラムの内容
// });

// CSSのスタイルをjQueryで変更するときは、「CSSメソッド」を使う
// $(function(){
  // $('.box1').css({
    // 'background-color': '#0000FF',
    // 'height': '100px'
  // });
// });
// もし1つだけのCSSを記述するときは、プロパティと値をそれぞれ「'」で囲み、間を「,」で区切る
// $('セレクタ').css('background-color','#0000FF');

// $('.box1').slideDown(1000);　中に数字でmsかけて表示
// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
//   $('.box1').hide();
// });

$(function(){
  $('.box1').slideDown(1000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});
// slideDown()の引数にfunctionを書き加えることで、スライドダウンした後にfunctionを実行できる。
// slideDownの中のfunctionに、cssで色と大きさを変え、slideUp()を指定した。