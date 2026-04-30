/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * var a = 20;
    * ex> a = a + 10; > a += 10;

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.

    ? 논리 연산자
    * &&(곱) 그리고(and), ||(합, verticalBar) 이거나(or)
    
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자(~의, 연결하기 위해 사용하는)
    * .
*/
// *case 1. 10이 저장된 변수 a , 숫자 20, 그리고 30을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a = 10;
    var result = a+20+30;
    console.log("합산:" + result);
}

// todo 1. 50이 저장된 변수 a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = (a*b)/10;
    console.log("값: " + result);
}

// todo 2. 숫자 5를 2로 나누었을 대 나머지 값이 몇인지 result 변쉥 저장 후 console에 출력.
function numbOP3(){
    var result = 5%2;
    console.log("값 : " + result);
}

// todo 3. 'hi'가 담긴 변수 a와 'WEB'이 담긴 변수 b를 합쳐 'hiWEB'을 console에 출력
function stringOP(){
    var a = "hi";
    var b = "WEB"
    var result = a+b;
    console.log("값 : " + result);
}

// case 2. ul, li 구조의 태그를 html page에 삽입하기
function operatorEx(){
    // ? html 구조 D(document)O(object)M(model)
    var list = '';
    list += '<ul>';
    list += '   <li>hello</li>';
    list += '   <li>js..!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}

// case 3. 다음 코드를 복합대입연산자로 간소화
function compareOperator(){
    var a = 10;
    a+=20;
    console.log("a = " + a);
}

// case 4. 증감연산자가 뒤로 올 경우
// 컴퓨터의 경우 앞에서부터 계산하고 보여주기 때문에 11이 아니라 10부터 보이는거다
function numberPlusAfter(){
    var number = 10;
    alert(number++); // todo. 예상 결과값 적기 : 10
    alert(number++); // todo. 예상 결과값 적기 : 11
    alert(number++); // todo. 예상 결과값 적기 : 12
    console.log(number);
}

// todo. 증감연산자 복함.
function numberPlusTodo(){
    var number = 10;
    console.log(number++); // ? 출력: 10 / 현재: 11
    console.log(--number); // ? 출력: 10 / 현재: 10
    console.log(++number); // ? 출력: 11 / 현재: 11
    console.log(number--); // ? 출력: 11 / 현재: 10
    console.log(number++); // ? 출력: 10 / 현재: 11
    console.log(++number); // ? 출력: 12 / 현재: 12
    console.log(--number); // ? 출력: 11 / 현재: 11
    console.log(number++); // ? 출력: 11 / 현재: 12
    console.log(++number); // ? 출력: 13 / 현재: 13
    console.log(number); // ? 출력: 13 / 현재: 13
}

// case 5. 숫자 10이 담긴 변수 a와 숫자 20이 담긴 b의 크기를 비교하여 결과를 출력
function compareOperator1(){
    var a = 10;
    var b = 20;
    var result = a > b;
    console.log("a > b = " + result);
}

// case 6. 숫자 10이 담긴 변수 a와 숫자 20이 담긴 b의 크기가 같은지 비교하여 결과를 출력
function compareOperator2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("a = b ? " + result);
}

// case 7. 숫자 10이 담긴 변수 a와 숫자 20이 담긴 b의 크기가 다른지 비교하여 결과를 출력
function compareOperator3(){
    var a = 10;
    var b = 20;
    var result = a != b;
    console.log("a != b ? " + result);
}

// case 8. a변수에는 '여자' b 변수에는 '웹디자이너'라는 값이 저장되어있다. 담겨있는 두 값이 모두 맞는지 result 변수에 저장 후 출력
function logicalOperator1(){
    var a = '여자';
    var b ='웹디자이너';
    var result = (a=='남자')&&(b=='웹디자이너');
    console.log("result = " + result);
}
//  todo. a변수에는 '남자' , b 변수에는 '웹퍼블리셔'라는 값이 저장되어있다. 담겨있는 두 값중 하나라도 맞는지 result 변수에 저장 후 출력.
function logicalOperator2(){
    var a = '여자'; //? 남자가 아닌 여자여도 true 결과가 나오게 만들어야함
    var b = '웹퍼블리셔';
    var result = (a=='남자')||(b=="웹퍼블리셔");
    console.log("result = " + result);
}
// todo. 다음 코드의 문제점을 수정하라
function compareOperator4(){
    console.log(30>20 && 20>10);
    /*
        ? (30>20)>10 -> true > 10 = 오류
        ! javaScript -> 암시적형변환.. 자료형 비교가 안되 시 임의로 변환 
        ? true > 10 -> 1 > 10 -> false.    
    */
}