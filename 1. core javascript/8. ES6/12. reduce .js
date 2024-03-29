const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];

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


// 배열 고차함수 Reduce : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여
//                      하나의 결과값을 반환하는 함수
// reduce 에 들어가는 callback
// callback(accmulator, currentValue)
// accmulator: 어떤 데이터를 계속 쌓아가는 변수
// currentValue : 현재 루프 회차에서 사용할 데이터
// reduce는 반복을 실행할때마다 currntValue를 accumulator에 누적함


//사과바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기 


const result = appleBasket.reduce((totalSweet,apple)=>totalSweet+apple.sweet,0);

// console.log(`사과당도총합 ${result}`);

// const result = [1, 2, 3, 4, 5, 6].reduce((a, b) => {
//   return a+b;
// },0);

// reduce의 callback 함수 다음 파라미터는 initalvalue를 의미하며
// 반복문의 accumulator 시작값을 의미함.
// 따라서 0을 시작값으로 두고 return a + b 을 하면
// 0 + 1 + 2 + 3 + 4 + 5 + 6 
// 시작값을 없애면 acumulator의 시작값이 0번 인덱스로 지정되며,
// 1 + 2 + 3 + 4 + 5 + 6


// console.log(`결과: ${result}`);


console.log("===============================")


function myReduce(array, callback, initailValue){
    // 어떤 값을 누적할 변수 
    let accumulator = initailValue === undefined? array[0] : initailValue; 
    const startIdx = initailValue === undefined ? 1 : 0;
    for (let i= startIdx; i<array.length; i++){
      accumulator = callback(accumulator,array[i]);
    }
    return accumulator;
}


console.log("===============================")


// 색깔별로 사과 개수 카운트하기

const countByColor = appleBasket
  .reduce((count,apple)=>{

    if(apple.color in count){
      count[apple.color]++;
    }else{
      count[apple.color] = 1;
    }
    return count;
  },{})
  console.log(countByColor);

  