

// js는 정수 나눗셈이어도 실수 결과값이 나옴
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더 크면 앞에 숫자가 그대로 나머지 몫은 0
console.log(4 % 10);


console.log(5 % 0); // 나눗셈 불가
console.log(0 % 5); // 몫과 나머지가 전부 0


// 제곱 연산
console.log(3 ** 4);


// 증감 연산자  

var x =3 ;
x++;
++x;
x--;
console.log(`x:${x}`);


// 전위 연산, 후위 연산 
var n1 = 10;
var n2 = n1++; // ++가 뒤에 있으면 먼저 n2 변수에 대입하고 후에 n1에 +1 을 함 
               // 뒤에 있으면 연산 우선순위가 늦어짐
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3; // ++가 앞에 있으면 먼저 n3에 +1을 하고 대입 함  
console.log(`n3: ${n3}, n4: ${n4}`);


var xx = 5;
xx++; // xx = 6

xx = xx+1; // xx = 6  xx+=1;와 같은 의미  (xx에 1을 더해서 대입 하세요) 
            // xx++; 와 xx == xx+1; 는 결과는 동일하지만 xx++; 가 속도가 훨씬 빠름 

xx *=3;  // 21
xx /=3; //  7 
xx **=2; // 49
xx %=7; // 0 (나머지 연산자)
console.log(`xx: ${xx}`);


