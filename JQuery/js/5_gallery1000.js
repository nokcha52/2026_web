/*
1번째 풀이
$(document).ready(function(){
    $(".1way").click(function(){gallery2(1,1000,1000)});
    $(".2way").click(function(){gallery2(2,500,500)});
    $(".3way").click(function(){gallery2(3,333,333)});
    $(".4way").click(function(){gallery2(4,250,250)});
    $(".5way").click(function(){gallery2(5,200,200)});
    $(".6way").click(function(){gallery2(6,166,166)});
    $(".7way").click(function(){gallery2(7,142,142)});
    $(".8way").click(function(){gallery2(8,125,125)});
    $(".9way").click(function(){gallery2(9,111,111)});
    $(".10way").click(function(){gallery2(10,100,100)});
});
function gallery2(count, imgWidth, imgHeight){
    var $images=$("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    for(var i = 0; i<$imgLength; i++){
        var $image = $images.eq(i);
        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;
        $image.css({
            "left" : xpos,
            "top" : ypos,
            "width" : imgWidth,
            "height" : imgHeight
        })
    }
}

*/

// 2번째 풀이
/*
$(document).ready(function(){
    $(".1way").click(function(){gallery2(1)});
    $(".2way").click(function(){gallery2(2)});
    $(".3way").click(function(){gallery2(3)});
    $(".4way").click(function(){gallery2(4)});
    $(".5way").click(function(){gallery2(5)});
    $(".6way").click(function(){gallery2(6)});
    $(".7way").click(function(){gallery2(7)});
    $(".8way").click(function(){gallery2(8)});
    $(".9way").click(function(){gallery2(9)});
    $(".10way").click(function(){gallery2(10)});
})
function gallery2(count){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var xpos, ypos;
    var containerW = $("imgContainer").width();
    var imgHeight = containerW/count;
    var imgWidth = containerW/count;

    for(var i = 0; i < $imgLength; i++){
        var image = $images.eq(i);
        xpos = (i%count)* imgWidth;
        ypos = parseInt(i/count)*imgHeight;
        image.css({
            "left" : xpos,
            "top" : ypos,
            "width" : imgWidth,
            "height" : imgHeight
        })
    }    
}
*/

// 3번째 풀이
$(document).ready(function(){
    gallery();
});
function gallery(){
    var currentWay,xpso,ypos;
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgSize = $images.width();
    $("[class$='way']").click(function(){
        currentWay = parseInt($(this).attr("class").replace("way","")); //replace는 이렇게 쓰는게 아니지만 way를 찾아서 빈칸으로 비워지면 된다. 
        // console.log("현재 가져온 값은" + typeof(currentWay) + "자료형의" + currentWay +"다");  -> 자료형을 점검해야한다.
        for(var i = 0; i < $imgLength; i++){
            // todo
            var $image = $images.eq(i);
            imgSize = containerW / currentWay;
            xpos = (i % currentWay) * imgSize;
            ypos = parseInt(i / currentWay) * imgSize;

            $image.css({
                'left' : xpos,
                'top' : ypos,
                'width' : imgSize,
                'height' : imgSize
            })
        }
    });
}
