


var socres = [83, 99 ,100 ,57];
var Sum =0;


// for (var i=0; i<socres.length; i++){
//     Sum+=socres[i];
// }


for (var s of socres){
   Sum+= s ;
}

console.log(`총점 ${Sum}, 평균 ${Sum/socres.length}`);








