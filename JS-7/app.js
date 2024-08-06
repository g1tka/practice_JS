// それぞれの正方形に個別にclass属性を指定
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる
// コード上からでは、何をクリックしたときに動作するのか判別しにくいデメリットもある
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});
