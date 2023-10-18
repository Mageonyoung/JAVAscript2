//버튼 가져오기
const orderButton = document.querySelector("#order");
//주문정보영역가져오기
const orderInfo = document.querySelector("#orderInfo");
//책 제목 요소 가져오기
const title = document.querySelector("#container >h2");//("h2");
//버튼을 클릭하면
orderButton.addEventListener("click",()=>{
    //새로운 p요소만들기
    let newP=document.createElement("p")
    //텍스트 만들기 -title의 텍스트 부분만 가지고 와서 텍스트 노드로 생성
    let textNode=document.createTextNode(title.innerText);

    //텍스트 노드를 p요소에 추가
    newP.appendChild(textNode);
    newP.style.fontSize ="0.8em";
    newP.style.color ="blue";
    //p 요소를 orderInfo영역에 추가
    orderInfo.appendChild(newP);
},{once : true});