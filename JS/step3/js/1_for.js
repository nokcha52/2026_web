/*
    ? for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    * 루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
    
}
*/
// case 1. 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "mark";
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    // document.write('1.'+ userName + '<br)');
    for(var i = 1; i <= 10; i++){
        document.write(i + "." + userName + "<br>");
    }
}
// case 2. 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i +"." + userName + "<br>");
    }
}
// todo. 1000번 출력 중, 홀수번째에만 이름이 출력되게 만들기
function nameprint500(){
    var userName = "mark";
    // for(var i = 1; i <= 500; i++){
    //     var n = 2*i-1;
    //     document.write(n +". " + userName + "<br>");
    // }
    for(var i = 1; i <= 1000; i+=2){
        document.write(i +". " + userName + "<br>");
    }
}
// case 3. js Engine처럼 생각하기
function thinkJS(){
    for(var i = 0; i < 10; i++){ /*? i가 10보다 작을때까지만 반복을 수행.*/
        document.write("i="+ i, "<br>"); //? 위 조건이 참일 경우 실행한다 = 0~9까지 출력.
    } // i가 증가하다가 10이 되는 순간 break.
    document.write("종료 i="+ i); // ? for loop가 중지될 때 i의 값인 10이 출력.
    // loop문 : 조건을 잘못 짤 경우 -> 무한반복(infinite loop)에 빠짐 = 중지 불가능 = server를 꺼야할 경우에는 큰일남. 재부팅하는데 시간이 최소 10분 가량
}

// todo. 1-10까지 출력되는 단순 반복문을 여러개 만들어보기
function answer1(){
    for(var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을 때 (1~10)까지만 반복 수행. 단, 반복이 끝난 후 i에 2를 더함
        document.write(i+"<br>"); // 증감이 이루어지지 않은 1,3,5,7,9
        document.write((i+1)+"<br>"); // 증감이 이루어진 2,4,6,8,10
    }
}
function answer2(){
    for(var i = 1; i <= 5; i++){
        document.write((2*i-1)+"<br>");
        document.write((2*i)+"<br>");
    }
}
function answer3(){
    for(var i = 10; i > 0; i--){
        document.write((11-i) + "<br>");
        console.log(i);
        continue;
        document.write(i+"<br>");
    }
}
function answer4(){
    for(var i = 10; i >= 1; i--){
        document.write((11-i) + "<br>");
    }
}
// case 4. * 10개가 찍힌 결과를 출력하자
function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result = " +star); 
}

// case 5. 자신이 좋아하는 과일 4개를 배열로 배치하고, alert로 출력해라.
function favorFruit(){
    var array = ['방토', '딸기', '오렌지' ,'귤','복숭아','레몬'];
    // ? 배열(array) - data들이 저장되는 방 -> ex) ['data(0)', 'data1(1)', 'data2(2)'......];
    // ! data는 입력 및 저장되는 순서대로 0부터 증가되게 되어있다. 번호 = indexNumber
    for(var i = 0; i < array.length; i++){ //.length를 하면 배열의 갯수를 셀 수 있다.
        alert(array[i]);
    }
    // var(순수 자바스크립트에서 사용하는 선언 방법) let(var 비슷) const(변수의 값이 일정해야하는 경우)
}

// todo. 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayTodo(){
    var data = ['변수','연산자','형변환','조건문 if','조건문 switch','반복문 for'];
    var swapNumb ="";
    for(var i=0; i < data.length; i++){
        switch(i){
            case 0:
                swapNumb = "첫";
                break;
            case 1:
                swapNumb = "두";
                break;
            case 2:
                swapNumb = "셋";
                break;
            case 3:
                swapNumb = "네";
                break;
            case 4:
                swapNumb = "다섯";
                break;
            case 5:
                swapNumb = "여섯";
                break;
            default:
                swapNumb = 'x';
                break;
        }
        document.write(swapNumb+"번째 내용 = " + data[i] + '<br>');
    }
}
function arrayTodo2(){
    var data = ['변수','연산자','형변환','조건문 if','조건문 switch','반복문 for'];
    var swapNumb = ['첫','두','세','네','다섯','여섯'];
    for(var i=0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + "<br>");
    }
}

// case 6. 역반복배열
function reverseFavorFruit(){
    var fruitArr = ['방토', '딸기', '오렌지' ,'귤','복숭아','레몬'];
    for(var i = fruitArr.length - 1; i >= 0; i--){
        document.write(fruitArr[i],"<br>");
    }
} //가격순으로 정렬할때 사용함.

// case 7. continue문
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue; // 비유: 캡아 방패같은 느낌. 계속 튕겨냄. 사용예시는 3의 배수를 제외하고 라는 조건이 있을때
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function continueEx(){
    var text = '';
    for(var i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text = text + i;
    }
    console.log(text);
}

// todo. continue 활용 - 1~10까지 더하되 홀수는 걸러내고 짝수만 더하게 만들기

function runContinue(){
    var numb = 0;
    for(i=1; i <= 10; i++){
        //조건문
        if(i%2 ==1){
            /*
                i가 홀수일 경우 반복중지 다음 반복 수행, 현재 다음 반복은 없다.
                (1을 2로 나눈 나머지가 1과 일치할 경우 다음 반복을 수행하라.) 다시 반복문으로
                (1을 2로 나눈 나머지가 1과 일치할 경우 다음 반복을 수행하라.) 이탈후 output += i; 실행
                (1을 2로 나눈 나머지가 1과 일치할 경우 다음 반복을 수행하라.) 다시 반복문으로
                (1을 2로 나눈 나머지가 1과 일치할 경우 다음 반복을 수행하라.) 이탈후 output += i; 실행
                ....
                이 조건으로 i값이 10보다 작거나 같을때까지 수행하여 출력하라.          
            */ 
            continue;
        }
        numb += i; //(2,6,12,20,30)
        //출력
        console.log(numb);
    }
}

// case 8. break
function forBreak(){
    for(var i = 1; i <= 10; i++){
        break; //만나는 즉시 중단 
        document.write(i+'<br>');
    }
    document.write("최종 i = " + i + "<br>");
}

function breakEx(){
    var i = 0; //선언부
    while(i < 6){ // while은 선언부, 증감부가 분리됨. / 무한반복에 유리
        if(i == 3){
            break;
        }
        i = i+1; //증감부
    }
    console.log(i);
}

// case 9. break 활용
function runBreak(){ //무한 루프를 원하는 타이밍에 끊을 수 있어야한다
    for(var i = 0; true; i++){ //while 무한루프 for 조건이 있을 경우 사용
        alert(i+"번째 반복문");
        if(!confirm('계속할거냐?')){
            break;
        }
    }
}

/* 
    todo. 배열 값을 변화시키면 자동으로 반응하는 경고창.
    todo. console에 "n번째 반복문"이라는 메시지가 떠야하고
    todo. n번째라고 하는 건 배열의 갯수로 규정된다.
    todo. length를 사용하는 것이 아니라 무한루프 상태에서 (배열의 갯수만큼만 반복이 실행=조건)된 이후에 break.
    todo. 1 "지정된 배열값: 6개. 출력 완료" 라는 출력완료 메세지가 document에 발생
*/
function runBreak2(){
    var swapNumb = ['첫','두','세','네','다섯','여섯'];
    for(var i = 0; true; i++){  
        console.log(swapNumb[i]+ "번째 반복문");            
        if(i== swapNumb.length-1){
            break;
        }      
    }
    document.write("지정된 배열값: " + swapNumb.length +"개. 출력완료" + "<br>");  
}

// ! 다중 for
// case 1. 반절 피라미드
function halfPyramid(){
    var star = "";
    for(var i = 1; i <= 10; i++){
        for(var j =0; j < i; j++){
            star += "*";
        }
        star += "<br>";
    }
    document.write(star);
}

// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = "";
    for(var i = 10; i >= 1; i--){ //? 1. ifor = 10~1 까지 수행
        for(var j = 0; j < i; j++){ // 2. jfor = j가 i보다 작을때까지 반복수행 10,9,8,7,6...
            star += "*"; //?변수 star에 반복생성된만큼 *을 넣음
        }
        star += "<br>"; //? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}


// todo. 완성형 피라미드
//  &nbsp; 홀수별 반복, <br>반복

function pyramid(){
    var star = "";
    for(var i = 1; i <= 10; i++){ //? 1. ifor = 1~10 까지 수행
        for(var j = 10; j >= i; j--){ // 2. jfor = 10~1까지 수행
            star += "&nbsp;"; //? 공백이 10개부터 1개까지 들어감.
        }
        for(var k = 0; k < 2*i-1; k++){ // ? 3. sfor = i가 들어올때마다 홀수화됨(1,3,5,7,9,11,13,15,17,19)
            star += "*"; //? 홀수화된 k의 수치만큼 반복해서 *이 들어감
        }
        star += "<br>";
    }    
    document.write(star); // ? ifor만큼 <br>을 변수 star에 넣음
}
// 2n-1 => 19 1개
// 잘못된 루프
function pyramidLoop4(){
    for(var i = 0; i < 10; i++){
        for(var j=9; j > i; j--){
            document.write("&nbsp;")
        }
        for(var j =0; j <= i; j++){
            document.write("*");
        }
        for(var j =1; j <= i; j++){
            document.write("*");
        }
        document.write("<br>");
    }
}
// 루프를 줄인다면~
function pyramidCustom(n){
    for(var i = 1; i <= n; i++){
        var s = "";
        for(var j = 1; j<=(2*n-1); j++){
            (j >= n+1 -i && j<=n-1+i)? s+="*":s+= "";
        }
        console.log(s+"<br>");
    }
}