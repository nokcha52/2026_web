var $fishList = null;
var timerID = -1; //interval을 초기화하는 변수
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(function(){ //바로 시작하고 싶을때 사용
    init();
    fishStartPosition();
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left-$fishWidth;
    console.log("1. 대상 선언 완료"); //어느 함수 파트에서 문제가 생겼는지 알아보기 위해 콘솔을 넣어둠.
}
// ? 변수 초기화 함수

function fishStartPosition(){
    for(var i = 0; i<$fishList.length;i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        });
    }
    console.log("2. 초기 위치 설정 완료");
}
// ? 초기 위치 설정 함수

function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임시작 함수 불러오기 성공")
}
// ? 이벤트 처리 함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){ //setinterval안에는 변수를 2개밖에 못쓰므로, 여러개의 함수를 실행해야할 때는 이런식으로 익명함수를 넣어서 그안에 함수들을 실행하면 된다.
            updateFishPosition(); //? 물고기 이동 함수
            displayFishPosition(); //? 물고기 위치 실시간 출력.
            checkGoalFish(); //? 결승선 도달 감지
        },200);
        console.log("4. 게임 정상 시작");
    }
}
function updateFishPosition(){
    for(var i = 0; i <$fishList.length;i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        /*
            ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수인 경우 내림한 정수값(ex 10.2 = 10)
            ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수인 경우 올림한 정수값(ex 10.2 = 11)
            ? Math.ceil(postNumb/10)
            ? 매개변수로 전달받은 게시글 수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 리턴
            ? 105/10 = 10.5 = 11
        */
        var newLeft = $fish.position().left + step;
        $fish.css("left",newLeft);
    }
    console.log("5. 물고기 움직임 정상.");
}
function displayFishPosition(){
    var info = "";
    for(var i =0; i < $fishList.length;i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 :" + $fish.position().left.toFixed(2) + "px <br>"; // tofixed 소숫점 잘라주는 함수
    }
    $info.html(info);
    console.log("6. 물고기 위치 표시 정상")
    // 내가 풀은것
    // for(var i = 0; i < $fishList.length; i++){
    //     var $fish = $fishList.eq(i);
    //     var $fishPos = $fish.position().left;        
    //     $info.append("<p>"+ i +"번 물고기 :" + $fishPos +"px" + "</p>");
    // }    
}
function checkGoalFish(){
    var winnerList = []; //배열 안에 인덱스로 저장
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition //0번 물고기면 0번방이라고 저장이됨.
            }); //배열에 저장함수.
            console.log("7. 데이터 저장 성공");
            console.log(winnerList);
        }
    }
    if(winnerList.length > 0){ //배열 안에 한개라도 들어가게 되었을때
        winnerList.sort(function(a,b){  //compare func. 모든 경우의 수를 정렬함 / 이거로 뭐 판매량 순 글자순 이런것들을 만들 수 있다.
            console.log(b.position - a.position);
            return b.position - a.position; //내림차순 정렬법.
            /*
                ? position 값 기준 내림차순 정렬.
                오름차순 -> 진행될수록 점점 값이 커지거나(1,2,3,4....) 정순(a,b,c,d)으로 나타나는 것.
                내림차순 -> 진행될수록 점점 값이 작아지거나(...4,3,2,1) 역순(..d,c,b,a)로 나타나는 것.
            */ 
        });
        endGame();
        console.log("8. 우승 물고기 선별 ")
        alert("우승! " + winnerList[0].index + "번 물고기"); // 제일 큰 값이 0번방에 들어오게 되어서 0번을 불러온것이다.
    }
}
// ? 결승선 도달 감지 함수
function endGame(){
    clearInterval(timerID);
    timerID = -1; // 0을 많이 써야해서 -1로 바꿔뒀었음.
    console.log("9. 게임 종료")
}
// ? 게임 종료 함수