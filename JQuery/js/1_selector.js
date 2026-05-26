/*
    JQuery - Library or FrameWork(화면단이기에 정보처리성이 적어서 이렇게 부르기 애매함/ 그래서 Ajax를 활용)
    - > 기존 JS의 문봅이 복잡하고 어렵고 길고.. 이런 부분을 화면개발 선에서 간소화하기 위해 태어남.
 */
// $ - 제이쿼리 식별자 ()안에 대상을 넣음 꼬리함수 많이 사용
$(document).ready(function(){ //브라우저가 준비되면 함수를 실행하라
    // case 1.
    justColor();
    // case 2.
    $("#btnCheck").click(sayHello); //excute
    // case 3.
    $("#btnAddBorder").click(addBorder);
    // todo.
    $("#btnTextChange").click(changeText);
});

function justColor(){
    var $divs = $("div"); //변수명이 같아도 식별자로 이용하면 다른 언어에서 충돌날 일이 없음. 그래서 제이쿼리 식별자를 이용함. css 선택자 전부다 사용 가능.
    $divs.css("color","#f00"); //매개변수 2개를 갖고 있게 태어남.
}
function sayHello(){
    alert('Hello!');
}
function addBorder(){
    $("#pannel").css("border","5px solid black");
}
function changeText(){
    // todo. 글자크기(25px), 색상(green) , 굵기(bold), 줄간(31px) 변경
    /*
    $("#pannel2").css("font-size","25px");
    $("#pannel2").css("font-weight","bold");
    $("#pannel2").css("color","green");
    $("#pannel2").css("line-height","31px");
    */
    //object 타입으로 변환, 많은 양을 처리해야할때 지원됨.
   $("#pannel2").css({
    "font-size" : "25px", 
    "font-weight" : "bold",
    "color" : "green",
    "line-height" : "31px"
   });
}
