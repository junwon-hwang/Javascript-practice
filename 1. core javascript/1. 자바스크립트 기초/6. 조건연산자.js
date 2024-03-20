

var money  = 35000;
/* 삼항 연산자를 사용하면 코드를 줄일 수 있지만 가독성이 떨어지면 쓰지말것 */
var food = (money >= 8000) ? '돈까스' : '라면';
/* 예시 */
var food =  (money >= 8000) ? '돈까스'
: (money >= 5000) ? '쫄면' 
: (money >= 3000) ? '라면' : '굶어';
 
var food 
if(money>=8000){
  food = 돈까스;
} else {
  food = 라면;
}

console.log(`선택한 음식 : ${food}`);

