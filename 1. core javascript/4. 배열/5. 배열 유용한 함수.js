

var foodList = ['닭꼬치','볶음밥','짜장면','족발'];

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌.
              // 처음 발견된 요소의 인덱스를 나타냄
              // 없으면 -1 

var target = "짜장면";

// var index = foodList.indexOf(target);
// console.log(`index : ${index}`);


// index 아래 처럼 만들어져 있음.
// for(var i=0; i<foodList.length; i++){
//   if(target===foodList[i]){
//     index = i;
//     break;
//   }
// }

// console.log(index);


// include(): 특정 데이터가 있는지 없는지 논리로 확인

var flag = foodList.includes("족발");
console.log(flag);

// slice(): 배열을 원하는 범위만큼 분할


var sliced = foodList.slice(1,3);
console.log(sliced);
console.log(foodList);

// 3번부터 끝까지
var sliced2 = foodList.slice(3);
console.log(sliced2);
// 전체 복사 
var sliced3 = foodList.slice();
console.log(sliced3);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음,


// reverse(): 배열을 역정렬 
// reverse 사용시 원본이 변경됨
// 프로그램 할 때 원본을 사용하지 말고 , 사본에서 변경을 진행
// 모든 데이터 조작시 사본을 생성하고 처리할 것 이후 문제가 없을때 원본에 반영
console.log("===============================================");

var nums = [10,20,30,40,50];
var numsCopy = nums.slice();
numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

// concat(): 배열을 결합한 사본을 가져다 줌 
console.log("===============================================");
var arr1 = [10,20,30];
var arr2 = [99,999];

var concated = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(concated);


// splice(): 배열의 삭제 및 삽입에 관여하는 메소드, 
// 원본에서 삭제 삽입 진행, 원본이 손상됨 
console.log("===============================================");
console.log(foodList);

foodList.splice(2,1);

console.log(foodList);

foodList.splice(0,1,'파스타','보쌈');
console.log(foodList);

// 안지우고 중간에 추가 , 2번 인덱스에 "마라탕"을 추가
foodList.splice(2,0,"마라탕");
console.log(foodList);

foodList.splice(2); // 2번 부터 끝까지 삭제 
console.log(foodList);











