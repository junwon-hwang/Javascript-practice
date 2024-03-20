

var num = 27.0;
// console.log(typeof num);


// console.log(num / 5.0);

var foodName = "깐풍기"; // "깐풍기" '깐풍기' `깐풍기` 사용가능
// console.log(foodName); 

var element ='<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n</nav>';
// console.log(element);

var elem = `
<nav>
  <ul>
    <li>딸기</li>
  </ul>
</nav>
`;

var month = 4;
var day = 5;
var anni = '식목일';

var sentence = month + '월' + day + '일은' + anni + '입니다';
var sentence2 = `${month}월${day}일은${anni}입니다`

// console.log(sentence);
// console.log(sentence2);

var userAge = 30; 

// boolean : 논리
var flag = userAge > 19;
// console.log(typeof flag);
// console.log(flag);

// undefined ,  null 
// undefined :  아직 값이 없는 상태 (고의로 값을 안넣은게 아님)
// null : 일부로 값을 없앤 상태 (고의로 값을 없앰)

var petName;
// console.log(petName);

var myHobby = "산책";
myHobby = null;
// console.log(myHobby);

function buyNewCar(money){
  if (money>5000){
    return '그랜져';
  } else if (money>3000){
    return '아반떼';
  } else if(money<=0){
    return null;
  }
}

// console.log(buyNewCar(4000));

