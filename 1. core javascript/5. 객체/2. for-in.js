

var phone = {
  company : "삼성",
  color : "펄 화이트",
  model : "갤럭시 S24 Ultra",
  price : 1200000,
}

// 값이 아닌 key 값을 반복함
for(var data in phone){
  // console.log(data);
  console.log(phone[data]);
  //console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone 새로운 프로퍼티 추가하고 싶음

console.log("memory"in phone);

var newKey = "memory"
if(!(newKey in phone)){
  phone[newKey] = "32GB";
}

console.log(phone);





