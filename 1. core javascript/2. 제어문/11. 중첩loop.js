
// var count = 0;

// // 중첩 loop는 곱하기 
// for(var i=0; i<3; i++){ // 3회 반복
//   for(var j=0; j<2; j++){ // 2회 반복 
//     // console.log('메롱'+ ++count);  

//     console.log(`${i} , ${j}`);
//   }
// }


// 구구단 2단

// var level = 2; // 단수


// console.log(`#구구단 ${level}단`);
// for(var line=1; line<9; line++){
//   console.log(`${level} x ${line} = ${level*line}`);
// }


// level loop문 8바퀴 * line lopp문 9바퀴 총 72바퀴
for(var level=2; level<9; level++){
  console.log(`#구구단 ${level}단`);
  for(var line=1; line<9; line++){
    console.log(`${level} x ${line} = ${level*line}`);
  }
  console.log(`========================================`);
}


