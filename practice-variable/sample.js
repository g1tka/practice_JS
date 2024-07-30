// 変数宣言
// var / let / const どれか。

// varによる再宣言
var nickname = "taro"
console.log(nickname)
// var nickname = "ichiro"
nickname = "ichiro"
console.log(nickname)

// varをletにすると、エラー。
// 再代入するには、var不要。letで宣言してもOK
// constで宣言すると、再代入エラー。

// スコープ例1
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)
// yは関数内で定義したものなので外で呼び出すことはできない。

// スコープ例2
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// スコープ例3
// for (let i = 0; i < 10; i++) {     
//   console.log(i) 
// }

// console.log(i)

// 巻き上げ（ホイスティング）について
var str = "webcamp"

function foo() { 
  // var str と書いているのと同じ
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
// >undefined と >dmm webcampが順に出力された？！
// 関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになる
// 初めのconsole.logで参照されたstrは、宣言されたのみの変数。自動的にundefinedを初期値として代入。
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// letじゃないといけない。再代入され続けるから。
for (const it = 0; it < 10; it++) {
  console.log(it);
}
// constだと、0のみ出力。再代入ができないから。
// 基本的にlet(再代入予定あり)、const（変えない）を使用。