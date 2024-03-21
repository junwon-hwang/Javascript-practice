

var a = +prompt('첫번째 숫자를 입력');
var b = +prompt('두번째 숫자를 입력');

var n = 0;

/* 입력한 a의 값이 b보다 큰경우 if를 사용해서 조건을 작성함 */ 
if(a>b){
  var t = a;
  a = b;
  b = t;
}

while(a<=b){
   n+=a;
   a++;
}

alert(`두수의 누적합은 ${n}입니다.`)

// var count = +prompt('정수를 입력');

// var count = +prompt('정수');
// var i = 1;
// var mark = '';

// while(i <= count){
//   if(i%2===1){
//     mark+= "+"
//   }else{
//     mark+="-"
//   }
//   i++;
// }

// alert(mark);