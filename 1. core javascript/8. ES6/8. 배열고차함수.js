function myForEach(array, callback){
  for(const x of array){
    callback(x);
  }
}

const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];


// 배열 고차함수
// forEach(배열의 요소를 순회)

// for (user of userList){
//   console.log(`내 이름은 ${user.userName}이구요~ ${user.address}에 살아요`);
// }


userList.forEach(user => {
  console.log(`내 이름은 ${user.userName}이구요~ ${user.address}에 살아요`);
});

let total = 0;
[10,20,30].forEach(Num => {
  total+=Num;
});

console.log(`total : ${total}`);


// filter : 조건에 맞는 배열안의 요소를 필터링

const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredArray = numbers.filter( n => n%2===0);
console.log(filteredArray);

// 회원목록에서 이름이 3글자인 회원들을 필터링

const filteredUserList = userList.filter(user => user.userName.length===8);
console.log(filteredUserList);

const filteredUserSalary = userList.filter(user => user.salary >= 7000000);
console.log(filteredUserSalary);

// map: 배열에서 특정 데이터들을 추출해서 새로운 배열에 맵핑

// filter => 10개의 데이터를 필터링 하면 , 10개 이하로 남음
//          ex) 10명 중 서울사는 애들을 필터링 하면 서울 3개만 남음 

// map => 10개의 데이터를 맵핑하면 , 항상 10개의 배열이 나옴
//      ex) 10명의 회원 정보중 이름 정보만 10개 가져와



console.log("==========================================");

const mappedNumbers = numbers.map( n => `<li class="List-item">${n}</li>'`);
console.log(mappedNumbers);
const mappedUser = userList.map( user => `${user.userName}는 ${user.age}세`);
console.log(mappedUser);

// 회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키값을 nickName, 나이는 old, 주소는 addr로 하고싶음
const mappedUserList = userList.map(user => ({ 
  nickName: user.userName, 
  old: user.age, 
  addr: user.address 
}));
console.log(mappedUserList);


// find 로 찾으면 첫번째 

const triple = numbers.find(n => n%3===0);
console.log(`triple : ${triple}`);

const twenty = userList.find(user => user.age>=50 && user.age<60);
console.log(twenty);



