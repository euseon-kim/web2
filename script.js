document.addEventListener("DOMContentLoaded", function () {

    const loadingText = document.querySelector('.loadingText');
    let counter = 0;

    setInterval(function () {
        if (counter <= 100) {
            loadingText.textContent = `${counter}%`;
            counter++;
        }
    }, 28); 

    const loader = document.querySelector('.loading');
    const mainContent = document.querySelector('.mainContent');

    setTimeout(function () {
        loader.classList.add('hide-loading');
        mainContent.classList.add('show-mainContent');
    }, 3000);

    const intro = document.querySelector('.intro');

    intro.addEventListener('click', function () {
        intro.style.opacity = '0'; 
        setTimeout(function() {
            intro.style.display = 'none'; 
        }, 500);
    });

    const dragscroll = document.querySelector('.dragscroll');
    const content = document.querySelector('.content');

    // 드래그 가능한 영역 크기
    const contentWidth = content.offsetWidth;
    const contentHeight = content.offsetHeight;

    // 화면 크기
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 중앙 위치 계산
    const centerX = (contentWidth - viewportWidth) / 2;
    const centerY = (contentHeight - viewportHeight) / 2;

    // 초기 스크롤 위치 설정
    dragscroll.scrollLeft = centerX;
    dragscroll.scrollTop = centerY;
    
})


const redCapTap = document.querySelector('.redCapTap');
const whiteCapTap = document.querySelector('.whiteCapTap');
const topCapTap = document.querySelector('.topCapTap');
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
const x = document.querySelector('.x');
const bottomCapTap = document.querySelector(".bottomCapTap");
const topRightPageCapTap = document.querySelector(".topRightPageCapTap");

redCapTap.addEventListener('click', function() {

    page1.style.display = 'block';
    x.style.display='block';

    dragscroll.style.display = 'none';
});
whiteCapTap.addEventListener('click', function() {

    page1.style.display = 'block';
    x.style.display='block';

    dragscroll.style.display = 'none';
});
topCapTap.addEventListener('click', function() {

    page1.style.display = 'block';
    x.style.display='block';

    dragscroll.style.display = 'none';
});
x.addEventListener('click',function(){
    
    page1.style.display = 'none';
    x.style.display='none';

    dragscroll.style.display='block';
})

bottomCapTap.addEventListener('click', function() {
    if (page2.style.display === 'block') {
        page2.style.display = 'none';
    } else {
        page2.style.display = 'block';
    }
});


topRightPageCapTap.addEventListener('click', function() {
    
    page3.style.display = 'block';
    // dragscroll.style.display = 'none';
});