const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

const titleTag = document.getElementById("titleTag");
const contentTag = document.getElementById("contentTag");

const titleData = [
    '프로젝트 허브',
    'AIOps Monitor',
    '스마트 스케쥴러',
    'AI 결제 플로우',
    '인스턴트 폼 빌더',
    '인사이트 대시보드',
    '협업 피드',
    '예산 시뮬레이터',
    '재무 애널리틱스',
    '스마트 계약허브',
    '품질 트래커',
    'API 커넥트',
    '권한 콘트롤+',
    'ProcureFlow',
    'DataMap Designer',
    'Adaptive UX Studio',
];
const contentData = [
    '프로젝트 일정·성과를 한눈에 관리',
    '장애 예측 및 자동 대응 시스템',
    '자동 일정 조정 및 WBS 기반 계획',
    '결재선 자동 추천, 즉시 승인',
    '반복문서를 빠르게 생성·편집',
    'KPI와 성과를 실시간 시각화',
    '실시간 댓글·멘션 중심의 업무소통',
    '예산 예측과 분석을 자동화',
    'AI 기반 예산·지출 효율 분석',
    '전자서명·버전관리 일원화',
    '테스트·이슈를 실시간 모니터링',
    '외부 서비스·데이터 자동 연동',
    '역할 기반 보안 및 접근 통합관리',
    '발주·검수·정산을 원클릭 처리',
    '데이터 표준화·모델링·시각화 통합',
    '반응형·AI 추천형 인터페이스 생성',
];

var currentNum = 4;
// var keywordList = document.querySelectorAll(".keywordList li ul li");
// var keywordActive = document.querySelector(".keywordList li ul li.active");
var keywordList = document.querySelectorAll(".keywordList li");
var keywordActive = document.querySelector(".keywordList li.active");
var totalNum = keywordList.length-1;
var clickNum = 0;

slideAction();

prevButton.addEventListener('click', function(){
    if(currentNum != 0){
        currentNum--;
    }else{
        currentNum = totalNum;
    }

    slideAction();
});
nextButton.addEventListener('click', function(){
    if(currentNum != totalNum){
        currentNum++;
    }else{
        currentNum = 0;
    }

    slideAction();
});

for(const keyword of keywordList){
    keyword.addEventListener('click', function(event){
        clickNum = this.dataset.slide;
        currentNum = clickNum;

        slideAction();
    })
}

function slideAction(){
    titleTag.innerText = titleData[currentNum];
    contentTag.innerText = contentData[currentNum];

    keywordActive.classList.remove('active');
    keywordList[currentNum].classList.add('active');

    keywordActive = keywordList[currentNum];
}

const menuButton = document.getElementById("menuBtn");
const closeButton = document.getElementById("closeBtn");

const menuPanel = document.querySelector("header div.mui");
const menuList = document.querySelectorAll("header div.mui ul li");

menuButton.addEventListener('click', function(){
    menuPanel.classList.toggle('active');
});
closeButton.addEventListener('click', function(){
    menuPanel.classList.toggle('active');
});

for(const menu of menuList) {
    menu.addEventListener('click', function(event){
        menuPanel.classList.toggle('active');
    })
}