$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
    keyControl();
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
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos, ypos){
    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }
}

function keyControl(){
    var $circle = $(".circleKey"); //값을 입력받는게 아니라 값을 증감하는거기 때문에
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        // console.log("입력한 keycode : " + typeof(e.keyCode) + e.keyCode);
        // ? w:87(ypos-), d:68(xpos+), s:83(ypos+), a:65(xpos-) 
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            //todo 이하 완성
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
            // 이럴땐 default 누르면 안됨.
            }      
        // todo. 해당 원이 프레임 밖으로 나갈수 없도록 가두기.
        // if문 사용시
        if(currentXpos < 0){
            currentXpos = 0;
        }        
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
       // 다항처리방법
       //(currentXpos > 0)? $circle.css("left",currentXpos): currentXpos = 0;
       //(currentXpos < 380)? $circle.css("left",currentXpos): currentXpos = 380;
       //(currentYpos > 0)? $circle.css("top",currentYpos): currentYpos = 0;
       //(currentYpos < 380)? $circle.css("top",currentYpos): currentYpos = 380;

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    }); 
    // top right botton left -> 예약키(windows, programs,browser...) 
    // wasd키로 = 감지는..?
    // 아무키나 누르면 -> 누른키의 e(이벤트가 일어난 당사자)를 찾음. = 키보드 하드웨어적 -> 전기신호 -> 0(false),1(true) -> ex> s가 눌렸다? s = true. -> 소프트웨어전달(window,program,browser..) -> 숫자로 전달받음. -> 출력 명령어가 존재
    
    
}
