
var i =1; //begin 
while (i<=5){ //end
  console.log("Hello"); //execute
  i++ //step
}

// while순서
// begin -> end -> execute -> step -> end -> execute -> step -> end
// begin은 최초 1회만 실행 end가 false면 stop 

/* while은 코드가 증가했을때 루프가 확인 어려움 */
/* for는 begin end step이 한곳에 있어서 루프 확인이 쉬움 */
/* 횟수가 정해진 반복문은 for 미정인 반복문은 while */

console.log('==============================');

for(var i=1; i<=5; i++)/*begin end step*/{
  console.log("Hello"); //execute
}

// for순서 
// begin -> end -> execute -> step -> end -> execute -> step -> end
// begin은 최초 1회만 실행 end가 false면 stop 

// 1~10까지 누적합

var total =0 ;

for (var i=1; i<=10; i++){
  // var total = 0 ; 결과값은 반복문 밖에 무조건 설정해야함 안그럼 초기화됨    
  total+=i;
}

console.log(total);

// 횟수 지정 반복문 
// 5회 반복 설정시 i=1; i<=5; i++ 보단 i=0; i<5; i++;

for(var i=0; i<5; i++){
  console.log('메롱');
}