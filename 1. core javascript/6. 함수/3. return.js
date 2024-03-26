
// return 은 함수의 탈출문(종료문)이다.
// return 아래의 코드는 실행 안됨.

function add(n1,n2){
  // console.log(`n1 : ${n1} , n2 : ${n2}`);
  return n1+n2;
  var x = 10;
  console.log(sdlakfjlkasd);
}

// return이 없는 함수 
function multi(n1,n2){
  console.log(`${n1} X ${n2} = ${n1*n2}`);
}



// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
// console.log(add(10,20));
// 제일 왼쪽 add 호출 한 뒤 가로안에 왼쪽add, 오른쪽add 호출 하고 나머지 호출
var result = add(10,20) * add(add(1,4),add(1,1));
console.log(`result: ${result}`);

console.log(add(10,20));

console.log("=======================================");


var r1 = multi(3,4);
console.log(`r1 : ${r1}`);


multi(add(2,3),add(5,6));


// 리턴이 없는 함수는 변수에 저장하지 말고, 
// 다른 함수의 매개값으로도 쓰면 안됨. 
var r2 = add(multi(2,4),multi(3,2));
// var r2 = add(undefined,undefined);
console.log(`r2 : ${r2}`);

// 후속조치가 필요하면 return 사용 미사용하면 return 미사용

// 데이터베이스를 접속하는 함수 
// function connectDataBase(id,pw,auth){
//   var connect = getConnection();
//   //....
//   //..
//   return true ; 
// }


//return 이 없는 함수에서 return을 break처럼 사용하기

function callName(nickName){
  var prohibits = ["바보", "멍청이", "메롱"];
  if(prohibits.includes(nickName)){
    console.log("나쁜말 쓰지 마세요");
    return; // 함수 강제 종료 (종료의 의미로 사용)
  }
  console.log(`${nickName}님 안녕하세요.`);
}

console.log("==============================");
// return이 없으니깐 변수 저장하면 안됨.
callName("뽀로로")


