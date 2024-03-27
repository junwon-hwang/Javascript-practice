

/* else if 는 하나의 그룹이 되지만 , 단순 if로만 작성시 각각의 그룹 */ 

var age = 15;


if(age>=20){
  console.log('성인입니다.');
}else if(age >= 17){
  console.log('고등학생입니다.');
}else if(age >= 14){
  console.log('중학생입니다.');
}else if(age >= 8){
  console.log('초등학생입니다.');
}else{
  console.log('아동입니다.');
}