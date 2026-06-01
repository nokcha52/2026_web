$(document).ready(function(){
    imgAlignHori();
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
// todo. x,y축으로 3열 배치
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgXpos = img.attr("src","x:");
        var imgHeigt = img.imgHeigt();
        for(var i=0;i<imgLength;i++){
            var calX = ;
            var image = img.eq(i);
            xpos = calX*imgWidth;
            for(var j=0; j<imgHeigt; j++){

            }
        }
    })
}