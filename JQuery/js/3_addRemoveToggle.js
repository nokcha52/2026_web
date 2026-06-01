$(document).ready(function(){
    toggleCheck();
    toggleTodo();
    tabUI();
    accControl(".accComponent li h3");
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");// 최대한 자세하게 서술하는게 정확해서
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false; //false가 먼저값이기 때문에 false로 설정. 토글이 일어나려면 리모컨처럼 온오프 시키는 개념.
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ? getter 방식: text() -> text불러와. text("blabla") -> text 내용을 blabla로 바꿔.
            // ? text를 변경할 수 있는 JQuery 함수..이럴때 ai 사용                       
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });//자바스크립트는 실상 이렇게 속성을 바꿔버릴 수도 있어서 웹에서 차단하기도 했었다. claude는 비쌈. 요즘 뜨는건 커서ai?/ ai의 시초는 파이썬.(프롬프트 작성 방식이 파이썬으로 구성됨.) 이 파이썬은 자바스크립트에서 유래. 
}
function toggleTodo(){
    // todo. text() -> text를 불러오거나 수정할때 사용
    // attr([attr이름],[attr값]) -> attr('type','password') -> attr '이름'의 '값'을 넣어라. 
    // 선언 -> 처리 -> 출력
    var $pwVisible = $(".material-icons.toggleVisible");
    var $pwInput = $("#userPW");
    var pwStatus = false;
    $pwVisible.click(function(){
        pwStatus = !pwStatus;
        if(pwStatus == true){
            $pwInput.text("visibility");
            $pwInput.attr("type","text"); // 이걸 강제로 바꾸면 text 타입으로 날라가게 된다. 그러면 보안상 문제가 된다. 그렇기에 나중에 로그인 버튼을 눌렀을때 password 타입으로 바꿔야한다.
        }else{
            $pwInput.text("visibility_off");
            $pwInput.attr("type","password");
        }
    });
}
// case 2.
function tabUI(){
    var $tabBtn = $(".tabMenu li");
    var $tabPage = $(".tabPage");
    // 이전값을 유지하려면 var active = null; -> 클로셔함수
    $tabBtn.click(function(){
        var activeTab = "#"+$(this).attr("data-tabNumb");
        // console.log(activeTab);
        // ?this - 이벤트가 일어난 당사자
        $(".tabMenu li").removeClass("activated"); // ?removeClass - 해당 클래스 제거
        $(this).addClass("activated"); // ?addClass - 해당클래스 추가. 여기선 저 이름 자체를 넣는거기때문에 .을 찍어주면 안됨
        $(".tabPage").removeClass("activated");
        $(activeTab).addClass("activated");
    });
}
// case.3
function accControl(target){
    $(target).click(function(){
        $(this).toggleClass("active"); //? toggleClass - 해당클래스를 넣었다 뺐다. (toggle script와 동일)
    });
}