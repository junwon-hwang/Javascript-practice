const userNames = ["김철수", "강감찬", "박영희"];

// userNames에서 각각의 요소들을 다시 변수에 집어넣고 싶다.
// 소량의 데이터에서만 가능
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

const [kk, , pp] = userNames;

console.log(`kk:${kk} pp:${pp}`);

const example = ["", [], () => {}];

const [, , myFunc] = example;

myFunc();

// 빈 변수 안만들고 딕스트럭쳐링으로 자리바꾸기 가능
let first = 10,
  second = 20;
[first, second] = [second, first];
console.log(`first : ${first} , second : ${second}`);

// 배열안에서 맨 앞에 2개만 각각의 변수에 저장하고 나머지는 다시 배열로 묶기
const numbers = [1, 3, 5, 7, 9, 11, 13];

const [one, three, ...numsCopy] = numbers;

console.log(one);
console.log(three);
console.log(numsCopy);
console.log(numbers);

console.log("===============================================");

// 스프레드를 통한 배열 간편 복사

const foods = ["감튀", "햄버거", "콜라"];
// 복사방법 3가지
// const copyfoods = foods.slice();
// const copyfoods = foods.map(f=>f);
// const copyfoods = [...foods];

// foods[0] = "치킨너겟";
// copyfoods.push("밀크쉐이크");

// console.log(`foods`, foods);
// console.log(`copyfoods`, copyfoods);

console.log("================================================");

// a.concat(b) => [...a,...b]

const newFoods = ["육포", ...foods, "닭다리",...userNames];
console.log(newFoods);
