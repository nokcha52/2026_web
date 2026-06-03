var $ex2 = null;
var count = 0;
// 외부에 선언하는건 쉽게 쓰기 위해서인데 많이 쓰면 안됨. 간단한 변수들만 만들기
$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>"+count+"-th.paragraph </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});
function prependCount(){
    count--;
    $ex2.prepend("<p>"+count+"-th.paragraph </p>");
    // ? 대상에 역순 추가
}
function appendCount(){
    count++;
    $ex2.append("<p>"+count+"-th.paragraph </p>");
    // ? 대상에 정순 추가
}