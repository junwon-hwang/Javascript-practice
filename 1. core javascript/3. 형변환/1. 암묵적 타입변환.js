


var n1 = 10;
var n2 = '20';

console.log(n1+n2);


var n3 = n1+' '; /*숫자 + 문자 = 문자*/
console.log(typeof n3);


var n4 = n2-n1; /*숫자-문자=숫자 , 문자-숫자 = 숫자*/
console.log(n4);

var n5 = n1*n2;
console.log(n5);

console.log('===============================================');

var n6 = 'hello' * 3 // ''안에 숫자가 아닌 다른 데이터가 있으면 연산 불가능
console.log(n6);

var n7 = +'99';
console.log(true+true);  // 논리 값을 숫자로 변환함 true = 1 , false = 0 
console.log(true+false);  // 자동변환
console.log(false+false);

console.log('===============================================');

// 논리가 아닌 데이터를 논리를 판단 Truthy, Falsy
// Falsy한 값만 암기 0, '',  Null, undefined, NaN
// falsy한 값들
if(false) console.log('hello-2');
if(0) console.log('hello-3');
if('') console.log('hello-4');
if(null) console.log('hello-5');
if(undefined) console.log('hello-6');
if(NaN) console.log('hello-7');

// truthy한 값들
if(99) console.log('hello-7');
if(`알룡?`) console.log(`hello-8`);
if(` `) console.log(`hello-9`); // 스페이스라는 데이터가 존재해서 truthy
if([10,20,30]) console.log('hello-10');
if([]) console.log('hello-11'); // 빈 바구니가 존재하니깐 truthy
if({kind:'개'}) console.log('hello-12');
if(function(){}) console.log('hello-13');


console.log('===============================================');

for(var i =1; i<=10; i++){
  if(i%2){
    console.log(`${i}는 홀수 입니다.`);
  }else{
    console.log(`${i}는 짝수 입니다.`);
  }
}

console.log('===============================================');

var apple = 10;
if(apple){
  console.log(`사과가 있습니다.`);
}else{
  console.log(`사과가 없습니다.`);
}

console.log('===============================================');




