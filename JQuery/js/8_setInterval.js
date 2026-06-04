var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0; // 위에서 전역변수를 걸어버렸으므로 끌어다쓸 수 있는것임. 그래서 clearinterval에 넣어줄 수 있는것. 원래대로라면 callback과 return을 써야함.

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();

}
function initEvent(){
    $("#btn_start").click(moveStart); // 움직임
    $("#btn_stop").click(moveStop); // 중지
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1); // 변수에 setinterval 넣는게 중요 포인트다
        // ? setInterval([function],[intervalSpeed])
    }
}
function moveCircle(){
    // ? circle position 움직임 구현 예정
    var xpos = $circle.position().left; //positon만 쓰면 상하좌우여서 left를 기준으로 움직임. 현재 왼쪽 좌표를 구해와라.
    xpos += runStep;
    $circle.css("left",xpos);
    //todo. 사각형 프레임 안에 원이 가둬져서 반복운동하게 만들기.
    railWidth = ($("#rail").width() - $circle.width());
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); // ? setInterval kill -> parameter 값으로 전달해야함. 이미 돌고 있는 함수를 가져올 순 없음. (위에서 가져오는건 함수가 돌고 있지 않으므로) 모순이 생김. 이래서 변수에 담으면 무조건 담게 되므로 timerID안에 담겨있음.
    timerID = 0; // 0으로 선언해야 setinterval이 다시 돌 수 있게 되는것이다. 우헝 어려워
}