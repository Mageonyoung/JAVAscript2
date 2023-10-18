//제목,저자,저장하기버튼,정보표시영역자져오기
const title = document.querySelector("#title");//제목
const author = document.querySelector("#author");//저자
const save = document.querySelector("#save");//저장하기버튼
const bookList = document.querySelector("#bookList");//정보가 표시될영역

//버튼을 클릭하기
save.addEventListener("click",(e)=>{
    e.preventDefault();//버튼을 누르면 서버로 보내지않는다(버튼눌렀을때 사라지지않음) 
    //제목과 저자 정보를출력
    //리스트요소만들기
    const itme=document.createElement("li");
    //item에 내용넣기
    item.innerHTML = `${title.value} - ${author.value} <span class=delBtn>삭제</span>
    `;
    //정보 영역에 추가
    bookList.appendChild(item);

    //input text 상자의 내용 지우기
    title.value= "";
    author.value="";

    //목록에서 제거하기
    //삭제 버튼 요소를 모두 가져온다
    const delBtn = document.querySelectorAll(".delBtn");
    this.parentNode.parentNode.removeChild(this.parentNode);

  
    //삭제 버튼을 누를때마다 삭제한다
});
