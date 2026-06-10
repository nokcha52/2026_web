$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도제어.
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향을 받음.
        tickerHover: false,  //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
        
        // * startSlide, randomStart 충돌.
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slide index 설정.
        randomStart : false, //? default: false. slide 노출 순서를 random으로 전환.
    
        // *infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: true,  //? default : true. slide간 전환 무한반복.
        hideControlOnEnd: false, //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제. infiniteLoop: false 필수
    
        // *adaptiveHeight
        adaptiveHeight: false, //? default : false. slide content높이에 따라 frame이 적응형으로 변환.
        adaptiveHeightSpeed: 750, //? default : 500. adaptiveHeight 작동속도. 특이사항없으면 speed 동기화
    
        video: true, //! default : false. video 종횡비활성화(slide에 video가 있을 때만!!)
        easing: 'ease-in-out', //? default : null. slide간 전환 가속도 설정. CSS timing-function option 사용가능.
        // ! responsive : 건들지말것
        responsive: true, //? default: true. slider 자체 반응형 켜기.

        captions: true,

        // *pager - indicator
        pager: true,
        pagerType: 'full',
        // pagerShortSeparator: '-' //식별자 
        // pagerSelector: '.newPager'
        pagerCustom: '.customPager',

        // controler
        controls: true, //없애면 접근성 위배
        nextSelector: '.btn_next',
        prevSelector: '.btn_prev',
        nextText: '다음',
        prevText: '이전',

        //auto
        auto: true, //
        autoControls:true,
        pause: 4000,
        autoStart: false, //컨트롤러가 있는 상태에서 자동으로 돌지 않아야 접근성 통과이다. 그렇기에 pause를 유지하려면 false로 둬야함
        autoDelay: 1500 //사용자의 환경에 따라 로딩되는 속도에 따라 슬라이드가 안보이고 넘어갈 수 있기 때문에 조절해줘야한다.
    });
});
//slick : 3가지 슬라이드를 가운데에 포커스를 두고 만드는 