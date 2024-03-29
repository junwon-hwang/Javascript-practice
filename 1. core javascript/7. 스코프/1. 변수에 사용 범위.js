var x = 99; // 함수 밖에서 선언된 변수, 전역변수, 글로벌스코프
            // 프로그램이 종료될때 메모리에서 내려옴
var y = true;

function foo(){
  // 함수 안에서 선언된 변수 지역변수, 로컬스코프
  // 함수가 호출 될때 메모리 생성, 호출이 종료 되면서 메모리 삭제
  // 밖에서 사용하려면 return 해줘야하며 다른 변수에 저장해서 사용
  var x = '홍길동';
  // console.log(`foo x : ${x}`);
  // console.log(`foo y : ${y}`);
  return x
}

// 전역변수는 전체적 사용 가능 , 지역변수는 선언된 함수 안에서만 사용가능
// 지역변수>>>>>>>>>>>>>>>전역변수

// var y = foo();
// console.log(`x : ${x}`);
// console.log(`y : ${y}`);



console.log("=================================");


// 중첩함수 : 함수 안에 함수를 정의

// 매개변수 M도 지역의 성격을 가지고 있음.
function outer(m){
  // n은 지역 변수 
  var n = "outer local n"
  var v = "outer local v"

  console.log(n);
  console.log(v);
  console.log(m);
  // 헬퍼 함수 : 바깥쪽 함수 전용함수
  function inner(){
    console.log(n);
    var m = "inner local m"
    console.log(m);
  }

  // outer 함수 안에서만 호출 가능
  inner();

}


outer("outer param m")