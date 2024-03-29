
/*
const increase = (() => {
  let count=0;
  return () => ++count;
})();


const decrease = (() => {
  let count=0;
  return () => --count;
})();


console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
console.log(decrease());

*/

// const countClousure = () =>{
//   let count=0;
//   const increase = () => ++count;
//   const decrease = () => --count;

//   return {
//     increase,
//     decrease, // 키와 값이 같으면 한번만 쓰면됨 .
//   };
// };

const {increase, decrease} = (()=>{
    let count=0;
    return{
      increase : () => ++count,
      decrease : () => --count,
    }
})();

console.log(increase());
console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
console.log(decrease());