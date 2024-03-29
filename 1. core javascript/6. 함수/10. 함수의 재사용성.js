// 배열안에 특정 요소의 인덱스를 찾아 반환하는 함수

const NOT_FOUND = -1;

function myIndexOf(array, searchElemnt) {
  for (var i = 0; i < array.length; i++) {
    if (searchElemnt === array[i]) {
      return i;
    }
  }
  return NOT_FOUND;
}

function myIncludes(array, searchElemnt) {
  return myIndexOf(array,searchElemnt) !== NOT_FOUND;
}

var foods = ["족발", "피자", "파스타", "김치찌개"];

var idx = myIndexOf(foods, "피자자");

console.log(`index : ${idx}`);

var flag = myIncludes(foods,"족발q");
console.log((`flag : ${flag}`));