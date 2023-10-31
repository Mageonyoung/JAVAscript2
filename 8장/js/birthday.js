const result = document.querySelector("#result");
const Birthday = new Date("2001-06-19");
const today = new Date();

//오늘시간에서 내 생일빼기
letpassTime = today.getTime()-Birthday.getTime();
//밀리터초계산
let passedDay =Math.round(passedTime/(1000*60*60*24));
result.innerText=passedDay;
