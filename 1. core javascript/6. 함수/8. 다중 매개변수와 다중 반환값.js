

function add2(n1,n2){
  return n1+n2;

}

// function aad3(n1,n2,n3){
//   return n1+n2+n3;
// }

// var r1 = add2 (5,9);
// var r2 = add3 (5,9,2);


// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달 한다. 


function addAll(numbers,others){
  var total = 0;
  for (var n of numbers){
    total+=n;
  }
  return total;
}

// ES6 - spread 문법  (...) 자동으로 패키징 해줌 
//                  10      20       [30,40,50]
// 아래와 같이 매개변수를 받을때는 spread가 제일 마지막에 와야함.
function addAllES6(first, second, ...numbers){
  console.log(numbers);
  var total = 0;
  for (var n of numbers){
    total+=n;
  }
  return total;
}

// 2개이상의 배열을 전달할때는 , 파라미터를 배열로 작성하여 보내준다.
// spread는 한번만 사용 가능,

var r1 = addAll ([1,2,3,4,5],[6,7,8,9,10]);
var r2 = addAllES6 (10,20,30,40,50);


console.log("===============================================");

// 다중 반환값
// 함수의 반환값은 언제나 하나다.
// 변수를 재사용 할것이 아니면 굳이 사용 않하는게 클린 코드 
// 변수는 2회이상 사용시 설정 

function arithmeticOperate(n1, n2) {

  return {
   add : add2(n1,n2), 
   sub : n1 - n2,
   multi :  n1 * n2,
   div: n1 / n2,
  };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);

var r4 = arithmeticOperate(5,3).multi;
console.log(`r4 : ${r4}`);


function foo() {
  return [1,2,3,];
}
