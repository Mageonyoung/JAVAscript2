//제목영역을 클릭하면 제목이 사라진다
//제목 요소를 자져오기
const title = document.querySelector("h1");
//제목영역을 클릭하면 삭제하자
title.addEventListener("click",()=>{
    title.remove();
});