/*
console.log(`김철수님 안녕하세요! 방가방가!!`); => 'hell(?)'
console.log('오늘도 즐거운 하루 되세요!!');

// 코드 100줄 정도 작성...

console.log(`박영희님 안녕하세요! 방가방가!!`); => 'Hello'
console.log('오늘도 즐거운 하루 되세요!!');

// 코드 500줄 정도 작성...

console.log(`뽀로로님 안녕하세요! Hello!!`);
console.log('오늘도 즐거운 하루 되세요!!');
*/

// 함수를 정의 한다. - 함수 정의 define function
// 이름은 동사형
// 코드의 모듈화
function sayHello(userName) {
  console.log(`${userName} 안녕하세요! 하위!!`);
  console.log("오늘도 즐거운 하루 되세요!!");
}

// 함수의 호출 - call function
// sayHello('철수');



// sayHello('영희');


function makeLIne(){
  console.log("=======================================");
}

// makeLIne()
// sayHello('a')
// makeLIne()
// sayHello('b')
// makeLIne()
// sayHello('c')

// 나의 프로그램에서는 원의 넓이를 자주 구함.
const PI =3.14159265;

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r){
  return PI*r**2;
}

// 반지름이 5인 원의 넓이 
var circle1 = calcAreaCircle(5);
console.log(circle1);


// 반지름이 17인 원의 넓이;
console.log(calcAreaCircle(17));

// 함수이름은 동사
// 게시글을 삭제하는 함수
function removeBoardArticle(){}


