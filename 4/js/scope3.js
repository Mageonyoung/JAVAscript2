// var hi = "hello";//전역변수

// function change(){
//    hi = "bye";
//    //함수안에서 전역변수 값 수정가능.
// }
// console.log(hi);//hello
// change();
// console.log(hi);//bye

var hi = "hello";//전역변수

function change(){
    //지역변수. 이 함수에서만 사용가능
  var hi = "bye";
   //함수안에서 전역변수 값 수정가능.
}
console.log(hi);//hello
change();
console.log(hi);//hello

//필기