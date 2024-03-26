

var pets = ['멍멍이','야옹이','쩝쩝이'];
// pets[3] = '징징이';

// push(): 배열 맨 끝에 데이터 추가

pets.push('징징이');
pets.push('어흥이','거부긔','닭둘긔');

// console.log(pets);


// pop(): 배열 맨 끝에 데이터 삭제 (삭제된 값을 변수에 담을 수 있음)   

var myPet1 = pets.pop();
var myPet2 = pets.pop();
var myPet3 = pets.pop();

// console.log(pets);
// console.log(myPet1);
// console.log(myPet2);
// console.log(myPet3);

// shift() : 배열의 맨 첫 데이터 삭제
// unshift() : 배열의 맨 첫 번째에 추가 

pets.shift();

console.log(pets);
pets.unshift("뽈뽈이");

console.log(pets);

