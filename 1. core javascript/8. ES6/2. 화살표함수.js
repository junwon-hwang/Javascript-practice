

// 함수선언식
// function add(n1,n2){
//   return n1+n2;
//}

// 함수표현식
// const add = function(n1,n2){
//   return n1+n2;
// };

// 화살표함수
// const add = (n1,n2) => n1+n2;

// const r1 = add(10,20);
// console.log(`r1 : ${r1}`);


// const sayHello = () => {
//   console.log("안녕하세요");
//   console.log("수고하세요");
//   return '에베베';
// }
// sayHello();

// const kim = {
//   name : "김철수",
//   greeting : sayHello,
//   dance: () => console.log("춤을 신나게 춥니다."),
// };

// kim.dance();
// kim.greeting();


// 정수 1개를 전달 하면 해당 정수의 제곱값을 리턴 하는 pow
// 파라미터가 한개일 경우 소괄호 생략가능
// 0개 2개 일 경우 소괄호 기재해야함 
const pow = n => n**2;

