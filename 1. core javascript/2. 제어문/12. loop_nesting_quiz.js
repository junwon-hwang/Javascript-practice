

// // 가로길이 , 세로길이 


// // 사각형을 저장할 변수

// var rectangle ='';

// /*
//     *****
//     *****
//     *****

// */


// for(var i=0; i<3; i++ ){
//   // 코드 3번 반복
//   for(var j=0; j<5; j++ ){
//     // 코드 15번 반복
//     rectangle+= '* ';
//   }
// } rectangle+= '\n';

// console.log(rectangle);


// 가로길이, 세로길이
var width = +prompt('한 변 (1): ');
var height = +prompt('한 변 (2): ');

// 사각형을 저장할 변수
var rectangle = '';


for (var i = 0; i < width; i++) {
    // .... 3번
    for (var j = 0; j < height; j++) {
        // .... 15번
        rectangle += '* ';
    }
    rectangle += '\n';
}

log(rectangle);
