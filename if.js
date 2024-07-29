// if文
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// while文
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');
// 2,4,8,16,32,64, 128

// do...while文
// 条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。
// その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。
do{
  num = num * 2;// 最低1回は行われる処理
}while(num < max);

alert('2を掛け続けて' + max + 'を超えるまでに必要だった回数は' + count + '回です');

// for文
// 決められた回数の処理を繰り返すときに使います。
let i;
let number = 0;

// for ( 初期値; 条件式; 増減値 ){ 繰り返し処理 }
for(i = 1; i < 11; i++){
  number = number + i;
}
// 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）

alert('1から10まで足し算した結果は' + number + 'です');
