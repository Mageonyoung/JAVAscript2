const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("button");
//버튼을 클릭하면
btn.addEventListener("click")
//p요소만들기
orderButton.addEventListener("click",()=>{
let newP = document.createElement(`P`);
//텍스트 노드 만들기
let textNode=document.createTextNode(`안녕하세요`)
//p의 자식으로 텍스트 추가하여 연결
newP.appendChild(textNode);
//자바스크립기준으로
let basicNode = document.querySelectorAll(`p`)[2];
//아ㅠ에 추가하기
document.body.insertBefore(newP,basicNode);
},{once :true});