//1부터 전달받은수까지 합계를 계산한느 함수
//함수선언
function calcSum(num){
    let sum =0;
    for(let i = 1; i <=num; i++){
        sum +=i;
    }
    document.write(`<h1>1부터 ${num}까지의합은 ${sum}입니다.</h1>`);
}
//함수호출
calcSum();//인수 값을 가지고호출