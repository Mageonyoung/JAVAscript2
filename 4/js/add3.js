//1부터 전달받은수까지 합계를 계산한느 함수
//함수선언
function calcSum(num){
    let sum =0;
    for(let i = 1; i <=num; i++){
        sum +=i;
    }
    return sum; //함수를 호출한 곳으로 돌려 줌.
   
}

//사용자로부터 정수입력 받아오기
let number = parseInt(prompt("정수입력(몇까지 더할까요?)"))


//입력받은 수를 인수로 함수호출
document.write(`<h1>1부터 ${number}까지의합은 ${calcSum(number)}입니다.</h1>`);