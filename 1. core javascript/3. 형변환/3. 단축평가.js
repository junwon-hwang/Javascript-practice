

true && true ;        // t
true && false ;      // f
false && true ;     // f
false && false ;   // f

true || true ;        // t
true || false ;      // t
false || true ;     // t
false || false ;   // f


// or 연산은 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log( null || '안뇽');


// and 연산은 : 첫번째 falsy를 반환
console.log('메롱'&& '즐~~');
console.log('메롱'&& NaN && '즐~~');
console.log( 0 && '룰루랄라');


/*
  단축평가 사용예시 
  (1) &&
  <h1>안녕하세요?</h1>
  login && <h2>xxx님 환영합니다.</h2>

  
  쿠폰당첨여부 && sendCoupon()
  내게시물여부 && <button>삭제</button>

  (2) ||
  쿠폰당첨여부 || sendMessage()
  (동일 !쿠폰당첨여부 && sendMessage();)
  */

  