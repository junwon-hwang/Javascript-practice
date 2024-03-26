
var food1 = "짬봉, 탕수욕, 자몽";

var food2 = "짬봉";
var food3 = "탕수욕";
var food4 = "자몽";
var all = `${food2}, ${food3}, ${food4}`

// 변수 하나로 여러 데이터를 관리

var arr = [10, 20, 30, 40];

console.log(typeof arr);

console.log(arr[1]);
console.log(arr[2]**2);
console.log(arr[2]);
console.log(arr[2] = arr[2] **2);
console.log(arr);

arr[1]=999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인

console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length-1]}`);

// 배열 데이터 순회 (전체참조 : travis)
console.log("============================");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log("============================");

for(var i = 0; i < arr.length; i++){ // 배열 데이터 순회 (전체참조 : travis)
  console.log(arr[i]);
}



// for ~ of 반복문 (배열 전용 반목문)

var weekDays = ['월','화','수','목','금','토','일'];
console.log("============================");

// for(var i=0; i<weekDays.length; i++){
//   console.log(`${weekDays[i]}요일!!`);
// }

// df 앞에 변수 한가지 생성 // 배열에서 꺼내서 담을 상자
// of 뒤에 반드시 배열 []
// 전체 반복시에만 유리 

for (var day of weekDays){
  console.log(`${day}요일!!`);
}


// 배열 생성 관례 : 이름 복수형, -List 어미

var fruit = ["자몽", "딸기", "오렌지"] // X

var fruits = ["자몽", "딸기", "오렌지"] // O
var fruitList = ["자몽", "딸기", "오렌지"] // O
var fruitArray = ["자몽", "딸기", "오렌지"] // O

var fruitArray = ["자몽", "딸기", "오렌지",] // O
// 배열 마지막에 , 찍으면 C언어는 4개 , 자바스크립트 3개
console.log(fruitArray.length);


// 자바스크립트사용시 관례로 마지막에 ,를 찍어둠 (사용편하게)
var tags = ['<li>오렌지</li>', 
            '<a href="#">링크</a>',
            '<h1>로고</h1>',
            '<h2>로고2</h2>', // <--- 배열 추가시 복붙 편하게 
          ];
console.log(tags);


















