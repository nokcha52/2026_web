//todo hw.1 각 수를 입력 받아 해당하는 조건의 메시지를 출력하라.
//? 1일 경우 "1등 10억", 2일 경우 "2등 5천만원", 3일 경우 "3등 300만원", 그외 수일 경우 "낙첨되었습니다."
function lotto(){
    var rank = prompt("등수에 따라 금액이 달라질 예정입니다. 숫자를 입력하세요.")
    if(rank==1){
        alert("1등입니다. 10억을 수령하세요.")
    }else if(rank==2){
        alert("2등입니다. 5천만원을 수령하세요.")
    }else if(rank==3){
        alert("3등입니다. 300만원을 수령하세요.")
    }else{
        alert("낙첨되었습니다.")
    }
}


//todo hw.2 다음 코드를 간소화 시키시오.
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");
    /*
    if(clickBtn=="오른쪽"){
        document.write("오른쪽!");
    }else if(clickBtn=="왼쪽"){
        document.write("왼쪽!");
    }else if(clickBtn=="가운데"){
        document.write("가운데!");
    }else{
        document.write("올바른값을 입력하세요.");
    }
    */
    // todo. 결과론적으로 if x 1 /else x 1로 처리가능.
    if(clickBtn == "오른쪽" || clickBtn == "왼쪽" || clickBtn == "가운데"){
        document.write(clickBtn + "!");
    }else{
        document.write("올바른 값을 입력하세요.")
    }
}