
// 50 입력 2 4 8 16 32 
//          22  23 24
 
// var a = +prompt("양의정수입력");

// var a = 10;

// 문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력

// var a = +prompt("정수입력");
// var total = '';


// for(var i=1; i<a; i++){
//   var b= 2**i;
//   if(b<a){ 
//     total+=b;
//   }
// }
// alert(total)

// 입력받은 숫자 이하의 2의 제곱수를 가로로 출력
// var n = +prompt('양의 정수를 입력하세요.'); 

// // 제곱수를 누적한 변수
// var accum = '';

// for (var i = 2; i <= n; i *= 2) {
//   accum += `${i} `;
// }
// alert(accum);



// 문제2: 1부터 입력한 정수n 까지의 모든 약수를 출력하고 개수를 출력

var targetNUm = +prompt("정수");
// 약수를 저장할 변수
var count = 0;
// 출력 내용을 저장할 변수
var result = '';

for(var i=0; i<=targetNUm; i++){
  if(targetNUm%i===0){
    result+=`${i}\n`;
    count++;
  }
}

result+= `약수의 갯수${count}개`;
alert(result);

