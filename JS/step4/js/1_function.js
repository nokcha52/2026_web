/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등...),
    중복 코드가 많은 문제를 근복적으로 해결하여 코드의 재사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/

// case 1. 함수의 필요성
// 1-1. 수동 출력
// document.write("안녕 반가워","<br>");
// document.write("안녕 반가워","<br>");
// document.write("안녕 반가워","<br>");

// 1-2 반복 출력 -> 이럴땐 안나왔으면 좋겠어요 needs -> ? condition = if, switch...
// -> 사용자가 원하는 만큼의라는 수량제어 등등의 기능을 하나의 함수에서 작동시키게 하기 위함.
/*
var comment = "안녕 반가워";
for(var i = 0; i < 30; i++){
    document.write(comment,"<br>");
}
*/

// case 2. 매기변수(parameter)가 있는 함수 만들기
function commentParam(count,comment){ //count, comment 이게 선언한것
    for(var i = 0; i < count; i++){
        document.write(comment, "<br>");
    }
    // 출력할때는 commentParam(3,"안녕, 반가워"); 콘솔창에 이런식으로 입력하면 된다.
}
// case 3. 매개변수 다시한번
// ? 함수내 정해진 변수의 value(값)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(numb1,numb2){
    var result = numb1 + numb2;
    alert("두 수의 합은 = " + result);
} // 자바스크립트는 자유도가 높기 때문에, 오류를 잡아내지않고 알아서 계산하므로 문제가 발생할 수 있다

// case 4. 매개변수의 자리가 없어도 있는것처럼 사용하는 arguments(가변인자함수 - 배열인듯 배열아닌 배열같은)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.(안에 있든 밖에 있는 얼마든지 사용가능하다는것)
    * 단, arguments는 array와 비슷해보이지만, length를 구하는 방식을 제외하고는 array와 다르다.
    * 그렇기 때문에 배열화시켜서 사용하려면 array로 추가변환작업이 필요.(이건 프론트엔드 영역)
*/
function sumAll(){
    console.log(typeof(arguments)+ ';' + arguments.length); //typeof(argument)는 object
    var willReturn = 0;
    for(var i = 0; i < arguments.length;i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
    // sumAll(1,2,3,4,5,6,7,8,9,10); 48시간 지나면 임시 저장된 정보가 사라짐. input이 4 -> 7개가 된다면
}

// todo. "자신의 이름"의 나이는 "자신의 나이"세 입니다. 출력문을 arguments를 이용해 만들어보기
// ! data 입력순서 변경 불가 = arguments
function showInfo(){
    alert(arguments[0] + "의 나이는" + arguments[1] +" 세 입니다.");
}

/*
    ? return(리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이때 매개변수나 arguments를 활용하면 함수 내부로 data등을 전달할 수 있는데(입구),
    * return Value는 이와 반대되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력부라면, 리턴값은 함수 내부에서 처리한 것을 함수 외부로 전달하기 위함. 
    * crud(백엔드용어) / 계산기 예시
*/ 

// case 5. 함수 f(x)안에 넣는 값이 매개변수. 그럼 출력은?
function f(x){
    /*
    alert(x*x); //그동안은 이런식로 불러냄.
    document.write(x*x);
    console.log(x*x);
    */
   return(x*x);
}
/*
console.log(f(9));
document.write(f(9));
alert(f(9));
*/

// case 6. arguments + return 혼합 
function sumAllEx(){
    var willReturn = 0;
    for(var i in arguments){ // 대상 갯수만큼 돌아야할때 for in 반복문. 숙어같은거 최대임계값
        // var i = 0; i < arguments.length;i++
        willReturn += arguments[i];
    }
    return willReturn;
}

// case 7. returnValue를 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var value = sumReturn1(13,26);