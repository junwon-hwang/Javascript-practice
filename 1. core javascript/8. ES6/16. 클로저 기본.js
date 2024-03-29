


// 자바스크립트의 함수는 함수를 리턴할 수 있음.

function calculator(){

  return function(n1,n2){
    return n1+n2;
  };
}

const x = calculator();
const y = x(10,20);
console.log(`y: ${y}`);


console.log("=======================");

const z = calculator()(6,9);
console.log(`z:${z}`);

const operate = () => (n1,n2) => n1*n2;

const k = operate();
const m = k(3,7);
console.log(`m : ${m}`);

console.log("=======================");

function bar(){
  function fas(){
    return 10;
  }
  return fas;
}

const h = bar()();


// 카운트를 증가시키는 함수;
/*
let count = 0; // 전역변수

const increase = () => count++;

console.log(increase());
console.log(increase());
count = 999; // 전역 변수 위험함 , 중간에 값 조작시 엉망이됨
console.log(increase());
console.log(`conut:${count}`);
*/

/*
const increase = () => {
  let count = 0;
  return ++count;
};

increase();
increase();
const count = increase();
console.log(`conut:${count}`);
*/

// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.

const increaseClousure = () => {
  let count = 0; // 지역변수 

  const helper = () => ++count;;

  return helper;
}


const increase = increaseClousure();

console.log(increase());
count = 999;
console.log(increase());
console.log(increase());


// 즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수 

// (function () {
//   console.log(`hello`);
// })();


// const incClosure = () =>{
//   let count = 0;
//   return () => ++count;
// };

// const increase_ = incClosure();

// increase_();
// increase_();
// increase_();


console.log("=======================");


const increase_ = (() =>{
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();