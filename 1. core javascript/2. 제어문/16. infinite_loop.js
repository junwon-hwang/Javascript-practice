
// while(true) 무한루프는 if()break;가 필수임

// 1~10사이의 랜덤 정수
// Math.floor(Math.random()*y-x+1)+x;
while(true){
  var rn = Math.floor(Math.random()*10)+1;
  console.log("Hello");
  if(rn===7){
    break;
  }
}

console.log("반복문 종료!!");

// for문 무한loof
for(;;){
  var rn = Math.floor(Math.random()*10)+1;
  console.log("Hello");
  if(rn===7){
    break;
}

console.log("반복문 종료!!");