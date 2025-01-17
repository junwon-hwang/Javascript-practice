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

/*
사과 중에 녹색이면서 당도가 9인 사과만 선별하여 
" 이 사과는 XX색이며 당도는 XXX 입니다"
라는 문자열이 들어있는 배열을 만들어서
콘솔에 반복 출력 해주세요.
*/




const filteredApple = appleBasket.filter(apple => apple.color === "green" && apple.sweet >=9);
const mappedApple = filteredApple.map(apple => `이 사과는 ${apple.color}이며, 당도는 ${apple.sweet}입니다.`)
const mappedApple2 = appleBasket.filter(apple => apple.color === "green" && apple.sweet >=9).map(apple => {
  const covertedColor = apple.color === "green" ? "초록" : "빨강";
  return `이 사과는 ${covertedColor}이며, 당도는 ${apple.sweet}입니다.`
});

// console.log(mappedApple);
// console.log(mappedApple2);

mappedApple2.forEach(apple => console.log(apple));

appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => {
    const covertedColor = apple.color === 'green' ? '초록' : '빨강';
    return `이 사과는 ${covertedColor}색이며 당도는 ${apple.sweet}입니다.`;
  })
  .forEach(apple => console.log(apple));

  console.log("=============================================");


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
  


/*
회원목록에서 서울에 사는 회원들의
두번째 취미만 추출하여
"XXX님의 두번째 취미는 XXX입니다를 반복하여 출력하라"
*/


userList
  .filter(user => user.address === "서울")
  .map(user => ({name: user.userName , second: user.hobbys[1]}))
  .forEach(result => console.log(`${result.name}님의 두번째 취미는 ${result.second}입니다.`))
