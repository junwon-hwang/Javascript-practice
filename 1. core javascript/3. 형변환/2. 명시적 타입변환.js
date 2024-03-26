
// 숫자 명시적 변환 

var x = '30' , y = '40' ;

var result = Number(x)+Number(y); // 명시적 타입 변환 (1)
var result2 = parseInt(x)+parseInt(y); // parseInt는 문자를 숫자로 바꿀때
                                      // 정수로 바꾼다 (소수점 이하는 버림)
                                      // parseDouble를 사용하면 소수점을 지킬 수 있음      
var result3 =  +x + +y;

console.log(result);
console.log(result2);
console.log(result3);


// 문자 명시적 변환

var m = '' + 10 + 20;
console.log(m);


// 명시적 논리 변환
console.log(Boolean('hello'));
console.log(Boolean(null));

console.log(Boolean(!!999));
console.log(Boolean(!!undefined));


// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
