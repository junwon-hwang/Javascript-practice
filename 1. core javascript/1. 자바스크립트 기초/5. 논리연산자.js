


var t = true , f = false;

// and 연산 : 논리곱 - &&
console.log(t && t); // true
console.log(t && f); // false
console.log(f && t); // false
console.log(f && f); // false

// or 연산 : 논리합 - ||
console.log('=================');
console.log(t || t); // t
console.log(t || f); // t
console.log(f || t); // t
console.log(f || f); // f

// not 연산 : 논리반전 - !
console.log('=================');
console.log(!t); // f
console.log(!f); // t

var money = 1000;

if(!money){
  console.log('나는 빈털터리에요~');
}else{
  console.log('나는 돈이 있어요!');
}

