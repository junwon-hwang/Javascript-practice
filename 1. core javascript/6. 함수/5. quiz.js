/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

var result = [];
var count = 0;


function calcDivisor(n){
  
  for(var i=0; i<=n; i++){
    if(n%i===0){
      count++
      result.push(i)
    }
  }  console.log(`20의 약수: ${result}`);
  return count
}


// 호출부 // 1,2,4,5,10,20
var divCount = calcDivisor(20);
console.log(`약수의 개수: ${divCount}개`);

// 예시 답 
function calcDivisor(n) {

  var divisor = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisor.push(i);
    }
  } //end for
  console.log(divisor);

  return divisor.length;
}