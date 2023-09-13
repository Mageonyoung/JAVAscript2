let userNumber =prompt("숫자 입력")
if(userNumer !=null){
    userNum = parseInt(userNumber);
    if(userNum %3===0){
        alert(userNum+`3의 배수입니다`);
    }
    else{
        alert(userNum+"은 3의 배수가 아닙니다");
    }
}
    else{
        alert("입력이 취소되었습니다");
    }
    