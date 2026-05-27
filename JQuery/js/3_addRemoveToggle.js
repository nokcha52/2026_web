$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $("material-icons.checkIco"); // 최대한 자세하게 서술하는게 정확해서
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false; //false가 먼저값이기 때문에 false로 설정. 리모컨처럼 온오프 시키는 개념.
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("check_box");
            // ?text를 변경할 수 있는 JQuery 함수..getter 방식 이럴때 ai 사용/ text() -> text 불러와. text()
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    }); //자바스크립트는 실상 이렇게 속성을 바꿔버릴 수도 있어서 웹에서 차단하기도 했었다. claude는 비쌈. 요즘 뜨는건 커서ai?
    
}

