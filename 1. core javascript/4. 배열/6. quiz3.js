/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/

// var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// while(true){
//   if(tvxq.length<1){
//     alert(`모두 삭제되었습니다.`);
//     break;
//   }

//   var member = prompt(`현재 멤버:${tvxq} \n삭제할 이름을 입력하세요.`);
//   if(tvxq.includes(member)){
//     var del_member = tvxq.indexOf(member);
//     tvxq.splice(del_member, 1);
//     alert(`삭제 완료!\n남은 멤버:${tvxq}`);
//     continue;
//   }else{
//     alert(`${member}은(는) 잘못된 이름입니다.\n다시 입력하세요.`);
//     continue;
//   }
// }

/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/

// var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

// while(true){
//   var member = prompt(`${tvxq}\n수정할 멤버을 입력하세요.`);
//   var new_member = prompt(`추가할 이름을 입력하세요.`);
//   if(tvxq.includes(member)){
//     tvxq.splice(tvxq.indexOf(member),1,new_member);
//     alert(`수정 완료 !\n현재 멤버:${tvxq}`);
//     continue;
//   }else{
//     alert(`${member}은(는) 잘못된 이름입니다.\n다시 입력하세요.`);
//     continue;
//   }
// }

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
  var choice = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  if (choice === '1') {
    var newName = prompt('추가할 새로운 멤버의 이름을 입력하세요.');
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice === '2') {
    var delName = prompt('삭제할 멤버의 이름을 입력하세요.');
    var idx = tvxq.indexOf(delName);
    if (idx !== -1) {
      tvxq.splice(idx, 1);
      alert(`${delName}이(가) 삭제되었습니다.`);
    } else {
      alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
  } else if (choice === '3') {
    alert('프로그램을 종료합니다.');
    break;
  } else {
    alert('잘못된 입력입니다. 메뉴 번호를 정확하게 입력해주세요.');
  }
}
