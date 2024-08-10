$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

// ある値に等しくない要素を非表示にする
// $()関数では、特定の属性を持つ要素や属性値を絞り込むことができます。
// 今回は、初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたい
// $('要素[属性 != "値"]')
// .hide();は、特定のHTML要素を非表示にするメソッド
// $('#tab-contents .tab[id != "tab1"]').hide();と記述することで、
//   id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります。

// 2行目。クリックされたときの動作を設定する
// id="tab-menu"のaタグがクリックされたときに、処理を実行してください
// id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示に
// .removeClass()は、クラス属性が設定されているHTML要素から、クラスを削除するメソッド（activeが削除対象）
// CSSの#tab-menu .activeの設定では、タブのクラスがactiveのときは背景色が白色／文字色が黒色（このCSSも削除必要）
// .addClass()は、任意のHTML要素にクラス属性を追加できる。$(this)のとき、つまり、タブがクリックされたとき。
// .attr()は、HTML要素の属性を取得したり設定できるメソッド。href属性を取得するように指定
// .show()は要素を表示するメソッド。取得したhref属性の中身が表示される。$(this)のとき＝タブがクリックされたとき

