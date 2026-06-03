$(document).ready(function(){
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
    tabMenu("#tabMenuDepth3 li");
});
function tabMenu(tabTarget){
    var $selectMenu = null;
    $(tabTarget).click(function(){
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this); //tag가 담김. 바깥의 대상이 물고있어서 여러개로 늘어나도 감당이 가능한 클로셔함수이다.
        $selectMenu.addClass("activated");
    });
}
