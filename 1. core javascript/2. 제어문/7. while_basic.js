
// console.log('10!!');
// console.log('9!!');
// console.log('8!!');
// console.log('7!!');
// //...
// console.log('0!!');

// console.log('=======================');

// var n = 10;
// console.log(`${n}!!`);
// n--;

// console.log(`${n}!!`);
// n--;

// console.log(`${n}!!`);
// n--;

// console.log('=======================');

// var begin=10, end=0, step=1;



// var n = begin;
// /* while 은 안에 있는 코드 실행 했으면 반드시 While로 이동 
//   ()의 조건이 false가 될때까지 진행 , false가 되면 실행 안함 */
// while(n >= end){
//   console.log(`${n}!!`);
//   n -= step;
// }
// /*
//    %while 진행 순서

//     회차        n
//   =================
//      1         10
//      2          9
//      3          8
//      4          7
     
     
//      10         1
//      11         0
//                -1
// */

// console.log('=======================');

// // console.log(`2 x ${n} = ${2 * n}`);

// var level =5;
// var n = 1;

// while(n<10){
//   console.log(`${level} x ${n} = ${level * n}`);
//   n++;
// }

// console.log('=======================');

// 10~34 까지의 정수를  홀수만출력

// var m = 10; // begin

// while(m<=34){
//   if(m%2===1){
//     console.log(m);
//     m++;
//   }
// }

// console.log('=======================');


// 1~10 까지의 누적합 


var total = 0;
var i = 1;

while(i<=10){
  total+=i;
  i++;
}

console.log(total);