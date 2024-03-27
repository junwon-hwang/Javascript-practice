

let x; 
x ='zz'
x ='ff'
console.log(x);

// const : 상수 선언 , 값을 고정시키기 위해 사용  
const y = "메롱"; 
console.log(y);

// 예시
const PI = 3.14159265;
const COLOR_GREEN = '#0f0';
/*
 $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다. 
// 객체를 선언할 때는 무조건 const를 사용
// 배열은 객체의 하위개념 const 사용 
const kim = {
  name : "김철수",
  age : 30,
};
// 가능
kim.age =31;
kim.name = "마이클 킴";

// 객체 새로 변경은 불가능 
kim = {
  name : "김철수",
  age : 30,
};

//  배열을 풀어쓰면 아래와 같음 
const array = {
  0: "z",
  1: "dd",
  2: "ddf"
  length:3,
}

array.length


const userName = 'zz'
// 일단 const 선언 후 나중에 바뀌어야한다? 하면 Let으로 변경

