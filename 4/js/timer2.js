//반복되는 실행 멈추기
let count =0;

let timer = setInterval(()=>{
    console.log("안녕하세요.");
    count++; //1씩증가

    if(count ===5){//2. 만약에 count가 5가 된다면 타이머를 멈추게함
        clearInterval(timer)
    }
},2000); //1. 2초마다 한번씩