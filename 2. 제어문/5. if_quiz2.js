

// 문제 1 : 세 수의 값이 같은지 판별 

// var A = +prompt("정수A");
// var B = +prompt("정수B");
// var C = +prompt("정수C");

// // if(10===10===10) => true === 10 컴퓨터는 불가능

// if(A === B && B === C ){
//   alert('3개의 정수값이 같습니다.');
// } else if(A === B || B === C || C === A){
//   alert('2개의 정수값이 같습니다.');
// } else {
//   alert('모두 다른 값입니다.');
// }


// 문제 2 : 두 수의 차이 구하기

// var A = +prompt("정수A");
// var B = +prompt("정수B");

// // 두 수의 차이 절대값으로 구하기 
// var diff;
// var diff = (A>B) ? A-B : B-A;

// if(A>B){
//   diff = A-B; 
// }else{
//   diff = B-A;
// }

// alert(`두 값의 차이는 ${diff}입니다.`)


// if(C>0){
//   alert(C);
// }else{
//   alert(-(C));
// }


// 문제 3 : 3개의 정수중 최소값 구하기 


var A = prompt("정수A");
var B = prompt("정수B");
var C = prompt("정수C");

// min : 최소값을 저장해 놓을 변수
var min = A;
if(B<min) min =B;
if(C<min) min =C;

alert(`최소값은 ${min}입니다.`);