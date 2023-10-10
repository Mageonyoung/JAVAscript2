//두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함
function multiple(num1,num2){//함수선언
    let mult=num1*num2;
    return mult;
   }
let num1 = parseInt(prompt("첫번째 수: "));
let num2 = parseInt(prompt("두번째 수: "));
document.write(`${num1} * ${num2} =  ${multiple(num1,num2)}`);