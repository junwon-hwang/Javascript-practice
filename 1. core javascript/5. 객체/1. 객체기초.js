


// 객체생성

// 우리 집 강아지 정보 저장

var name = "뽀삐";
var kind = "진돗개";
var age = "3살";
var injection = true;
var favorite = ['산책','간식'];
var bark = () => console.log('왈왈!');

//  배열로 하기엔 어려움이 있음
//  순서가 없는 데이터 객체 , 순서가 있는 데이터 배열

var dog = ["뽀삐",
           "진돗개",
           "3살",
           true,
           ["산책,간식"],
           ()=>console.log("왈왈!"),]

var dog = {
  name : '뽀삐',
  kind : '진돗개',
  age : 3,
  injection: true,
  favorite:['산책','간식'],
  bark:()=>console.log("왈왈!")
};

// 우리 집 고양이 정보 저장

var cat = {
  name : '콩순이',
  kind : '코숏',
  age : 2,
  injection: true,
  favorite:['낮잠','방 어지르기'],
};

// console.log(dog.name);
// console.log(cat.name);

// 키는 반드시 문자로만 기재 
// 띄어쓰기는 " "로 묶어주면 되는데 쓰지말것 

var 게시판글 = {
  글번호 : 11,
  작성자 : {
    계정명 : 'abc',
    닉네임 : '깜찍이',
    가입일지 : '2023,-12-12'
  },
  글내용 : '안녕하세요',
  작성일 : "2024-03-26"
};

// 객체에 저장된 데이터 참조(조회)


console.log(dog.age);
console.log(cat.injection);

// 객체내 배열의 데이터 찾기
console.log(cat.favorite[1]);

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
// slice , concat = 원본유지.


dog.age++ // 숫자
!dog.injection // 논리
dog.favorite.push("꼬리흔들기"); // 배열
cat.favorite.splice(0,1); // 배열

dog.favorite.splice(1,1); // 배열
dog.favorite.reverse(); // 배열
console.log(dog.favorite); 


// 객체 참조하는 두번째 방법

console.log("==================================");

// 반드시 키값을 문자열로 써야함 

var key = 'name';

console.log(dog.name);
console.log(dog["name"]);
console.log(dog[key]); // => console.log(dog["name"]); 동일


// 프로퍼티 수정하기 기존에 있는 KEY로 접근
console.log("==================================");

dog.age = 4;
cat.favorite[1] = "실뭉치";


console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 기존에 없는 KEY로 접근 
console.log("==================================");

cat.friend = "철수";
console.log(cat);


// 프로퍼티 삭제 

console.log("==================================");

delete cat.favorite[1];
delete cat.friend;

console.log(cat);










