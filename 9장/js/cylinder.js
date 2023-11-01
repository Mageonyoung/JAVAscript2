//생성자 함수 만들기
// function Cylinder(cylinderDimater,cylinderHeight){
//     this.dimater=cylinderDimater; //지름
//     this.height=cylinderHeight; //제곱
//     //부피 계산 메서드
//     this.volume = function(){
//      //부피계산=반지름*반지름*pi*높이
//      let radius = this.diameter/2;
//      return (Math.PI*radius*radius*this.height).toFixed(2);
//     };
// }
//클래스만들기
class Cylinder{
    constructor(cylinderDimater,cylinderHeight){
        this.dimater=cylinderDimater; 
        this.height=cylinderHeight;
    }
    volume(){
        let radius = this.diameter/2;
        return (Math.PI*radius*radius*this.height).toFixed(2);
    }
}
//버튼가져오기
const btn =document.querySelector("button");
//결과 표시영역가져오기
const result =document.querySelector("#result");
//버튼을 누르면 입력한 지름과 높이를 가지고 생성자를생성

btn.addEventListener("click",function(event){
    event.preventDefault();
    //지름값 가져오기
    const dimater =document.querySelector("#cyl-diameter").value;
    //높이값 가져오기
    const height =document.querySelector("#cyl-height").value;

    //빈칸인지 체크
    if(diameter ===""|| height ===""){
        result.innerText=`지름값과 높잇값을 입력하세요`;
    }
    else{
        let cylinder= new Cyliner(parseInt(diameter),parseInt(height));
        result.innerText=`원기둥의 부피는${cyliner.getVolume()}입니다`;
    }


    //객체생성
    let cyliner = new Cyliner(parseInt(diameter),parseInt(height));
    //계산결과 result에 표시
    result.innerText=`지름${dimater},높이${height}의 원기둥의 부피는${cyliner.volume()}입니다`
});