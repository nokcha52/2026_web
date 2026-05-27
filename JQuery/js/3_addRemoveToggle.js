$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");// 최대한 자세하게 서술하는게 정확해서
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false; //false가 먼저값이기 때문에 false로 설정. 리모컨처럼 온오프 시키는 개념.
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // getter 방식: text() -> text불러와. text("blabla") -> text 내용을 blabla로 바꿔.
            // ? text를 변경할 수 있는 JQuery 함수..이럴때 ai 사용                       
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });//자바스크립트는 실상 이렇게 속성을 바꿔버릴 수도 있어서 웹에서 차단하기도 했었다. claude는 비쌈. 요즘 뜨는건 커서ai?/ ai의 시초는 파이썬.(프롬프트 작성 방식이 파이썬으로 구성됨.) 이 파이썬은 자바스크립트에서 유래. 
}