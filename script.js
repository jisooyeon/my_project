// script.js

// 명언 데이터
const saying_data = [
    {
        text: "많은 인생의 실패는 사람이 포기할 때 자신이 성공에 얼마나 가까이 있는지 깨닫지 못하는 것이다.",
        author: "토마스 에디슨"
    },
    {
        text: "인생은 위대한 모험이거나 아니면 아무것도 아니다.",
        author: "헬렌 켈러"
    },
    {
        text: "일기예보에도 불구하고, 봄처럼 살아라.",
        author: "릴리 퓰리쳐"
    },
    {
        text: "사랑에는 항상 광기가 존재한다. 그러나 광기에는 항상 이유가 존재한다.",
        author: "프레드릭 니체"
    },
    {
        text: "사람들과의 인연에서 사랑이란 공기처럼 가벼운 것이다. 가벼운 날개를 활짝 펴고 순식간에 날아간다.",
        author: "알렉산더 포프"
    },
    {
        text: "인생에서 최고의 행복은 사랑받고 있다는 확신을 갖고 있을 때이다.",
        author: "빅터 휴고"
    },
]

console.log(saying_data);

// 명언 제이터 초기값 화면에 출력 (DOM)
const titleEl = document.querySelector('.box .text-box .title');
const authorEl = document.querySelector('.box .text-box .author');
console.log(titleEl)
console.log(saying_data[0].text); // 첫번째 text자료

// 초기값 표시
let count = 0;
titleEl.innerHTML = saying_data[count].text;
authorEl.innerHTML = saying_data[count].author;

// 인터벌 재생 함수
setInterval(function(){
    let r = 0;

    // 0~5의 랜덤 숫자 발생
    r = Math.floor(Math.random()*6);
    console.log(`r = ${r}`);

    titleEl.innerHTML = saying_data[r].text;
    authorEl.innerHTML = saying_data[r].author;
},5000)

