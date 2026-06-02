$(document).ready(function(){
    imgAlignHori();
    imgAlignMix(6);
});
// case 1. x축 정렬
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width(); //? 너비 구하기. .height() : 높이구하기
        for(var i=0;i<imgLength;i++){
            var image = img.eq(i); //? eq(n) : n번째 대상(이미지) 구하기
            xpos = i*imgWidth;
            image.css("left",xpos);
        }
    })
    $(".reset").click(function(){
        img.css("left",0);
    });
}
// todo. x,y축으로 3열 배치 + 매개변수 형태로 변환(매개변수를 통해 원하는 배치로 바꿀 수 있다.)
function imgAlignMix(count){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeigt = img.height();
        for(var i=0;i<imgLength;i++){
            var image = img.eq(i);
            xpos = (i%count)*imgWidth;
            ypos = parseInt(i/count)*imgWidth;
            image.css("left",xpos);
            image.css("top",ypos);
        }
    })
    $(".resetMix").click(function(){
        img.css("left",0);
        img.css("top",0);
    });
}