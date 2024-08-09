$(function() {
  $('.menu-trigger').on('click', function(event) {
    //  .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

// さらに、.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、
// activeクラスになったときにアイコンが「×」になるように設定されています

// this は7章。クリックされた要素自身を指す。

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。