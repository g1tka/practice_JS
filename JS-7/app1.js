$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
// button要素がクリックされたときに、処理を実行してください、という指示
// .children()は、HTML要素直下のすべての子要素を取得します。
// ここでのchildrenは「ul要素の子要素」、つまり、li要素が対象になります。