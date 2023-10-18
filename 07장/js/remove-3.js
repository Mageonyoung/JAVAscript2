//모든 스판항목가져오기
const btn = document.querySelectorAll("p>span");
//항목중에 하나를 선택하여 클릭하면
for(let btn of button ){
    btn.addEventListener("click",function(){
        //해당요소가있으면삭제
        //x버튼누르면 x버튼과 그내용이  모드 삭제되어야함
        //span항목을 클릭하면 부모노드인 p삭제
        this.parentNode.remove(this);
    });
}