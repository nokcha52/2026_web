/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/

// 백엔드에서 주로 쓰니까 구동 원리만 알아두자

// case 1. pw '1234'가 입력되면 '접속승인', 아니면 '잘못입력하였습니다.' 출력
function pwCheck(){
    while(true){
        var value = prompt("패스워드를 입력하세요");
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert("잘못 입력하셨습니다.");
        }
    }
}
// case 2. whileContinue
function whileContinue(){
    var i =1;
    while(i<=10){
        i++;
        continue;
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

// case 3. whileBreak
function whileBreak(){
    var i = 1;
    while(i<=10){
        i++;
        break;        
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

// todo. 구구단 숫자를 입력받아 출력하는 while문
// ? 1. 숫자 입력받을 prompt 출력
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// ! 9단 이내로만 입력받기 ex> 9단이 넘어갈 시 '9단 이하로 입력하세요' alert 출력
function gugudan(){
    var numb = prompt("보고싶은 구구단을 입력하세요.(1~9단) ");  
    var i = 1;
    /* 
    if(numb <= 9){
       while(i <= 9){
           document.write(numb + "x" + i + "=" + i*numb+ "<br>");
           i++;
       }
    }else{
       alert("9단 이하로 입력하세요.");
    }
    */
   while(i<=9){
    if(numb > 9){
        alert("9단 이하로 입력하세요.");
        break;
    }
    document.write(numb + "x" + i + "=" + i*numb+ "<br>");
    i++;
   }
}

// todo. end가 입력될때까지 숫자를 계속 입력해서 받는데, 입력값의 총합을 출력하고, 
// prompt에는 몇번 수행했는지에 대한 "x"번째 입력 메세지도 표시되어야함.
function sumNumb(){
    var i = 1; // ? 카운트 변수
    var result = 0; // ? 매턴마다 결과담기
    while(true){
        var numb = prompt(i+ "번째 입력");

        result += parseInt(numb);
        i++;

    }
}

function sumNumb2(){
    var i = 1;
    var result = 0;
    while(true){
        var numb = prompt(i+"번째 입력");
        if(numb == "end"){
            break;
        }else{
            result += Number(numb);
            document.write("현재까지의 총합 : " + result + "<br>");
        }        
        i++;
    }
}