function runAlert(){
    alert("안녕?"); // libFunction - 라이브러리함수 = 내가 만든 함수가 아님. 원래 있는 것.
}
function runWrite(){
    document.write('hi');
}
// 예전 언어는 동기언어(순서대로 발동해야함) c언어, js가 대표적 / 그러나 js는 비동기처럼 만들 수 있음
// 최신 언어는 비동기언어(개별로 발동해서 버퍼링은 없음) 백엔드 같은거 리액트 뷰 등 -> 검색엔진 인식이 안됨.
function runLog(){
    console.log('곤방와');
}
