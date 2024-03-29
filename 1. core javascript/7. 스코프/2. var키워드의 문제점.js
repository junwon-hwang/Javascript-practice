


// // 1. 변수의 중복선언을 암묵적 허용
// var x = 10;


// // ... 10만줄...
// // var는 의도와 상관없이  기존 x의 값을 지워버림
// var x = 'ddd';
// console.log(`x : ${x}`);

// // let은 재선언이 불가함 
// let a = 10;
// let a = ddd;

// console.log(`a : ${a}`);


// 2. var 키워드는 블록 레벨 스코프를 지원하지 않음
// let 은 for문안에서 사용되고 for문이 끝나면 사라짐
// 변수관리 효율성이 좋아짐

let i = "메롱";

for(let i = 0; i<3; i++){
  console.log(`for - i : ${i}`);
}

console.log(`global - i : ${i}`);



// 3. 호이스팅 : 선언 위치와 관계없이 참조 가능함

hobby = "댄스";


// ..... code 
var hobby;
console.log(hobby);


// 자바스크립트에서는 let(거의 for문에서만보임 )
// const 90%이상 사용 를 사용.