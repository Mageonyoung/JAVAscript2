//1부터10까지 합계를 계산
//함수선언
function calcSum(){
    let sum =0;
    for(let i = 1; i <=10; i++){
        sum +=i;
    }
    document.write(`<h1>1부터 10까지의합은 ${sum}입니다.</h1>`);
}
//함수호출
calcSum();