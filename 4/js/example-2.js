//화살표를 사용해서 두 수를 받아서 곱하는 함수를 정의한 후 곱한값
let mul = (a,b)=> {a * b;}

let num1 = parseInt(prompt("첫번째 수: "));
let num2 = parseInt(prompt("두번째 수: "));
document.write(`<h2>${num1} * ${num2} =  ${mul(num1,num2)}</h2>`);