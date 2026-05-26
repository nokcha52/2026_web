$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }   
}
// todo. x,y 축 움직임 주기
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val(); //string으로 땡겨짐
    var ypos = $("#ypos").val(); //string으로 땡겨짐
    console.log(xpos,ypos);
    xpos = parseInt(xpos); //숫자로 형변환
    ypos = parseInt(ypos); //숫자로 형변환
    if(xpos >= 0 && xpos <= 380 && ypos >= 0 && ypos <= 380){
        $circle.css({
            "left": xpos,
            "top": ypos
        });
    }else{
        alert("잘못된 수치입니다. 380 이하의 숫자만 입력하세요.");
    }    
}
// todo의 매운맛
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    $circle = $(".circleDetail");
    var xpos = $("#xpos").val(); //string으로 땡겨짐
    var ypos = $("#ypos").val(); //string으로 땡겨짐
    xpos = parseInt(xpos); //숫자로 형변환
    ypos = parseInt(ypos); //숫자로 형변환
    circleMovecommand(xpos,ypos);
}
function circleMovecommand(xpos,ypos){
    if(xpos >= 0 && xpos <= 380 && ypos >= 0 && ypos <= 380){
        $circle.css({
            "left": xpos,
            "top": ypos
        });
    }else{
        alert("잘못된 수치입니다. 380 이하의 숫자만 입력하세요.");
    } 
}