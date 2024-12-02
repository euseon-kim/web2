document.addEventListener("DOMContentLoaded", function () {

    // 초기화
    // wrap.style.backgroundImage = 'url(image/bg.jpg)';
    // wrap.style.width = '4000px';
    // wrap.style.height = '2500px';
    // wrap.style.backgroundSize = 'cover';
    // wrap.style.position = 'absolute';
    // wrap.style.left = '50%';
    // wrap.style.top = '50%';
    // wrap.style.transform = 'translate(-50%, -50%)';
    // wrap.style.overflow = 'hidden';
    // wrap.style.cursor = 'grab';
    
    const intro = document.querySelector('.intro');

    intro.addEventListener('click', function () {
        intro.style.opacity = '0'; 
        setTimeout(function() {
            intro.style.display = 'none'; 
        }, 500);
    });

})

const wrap = document.querySelector('.wrap');
let isDragging = false;  
let startX, startY;    
let offsetX = 0, offsetY = 0; 

wrap.addEventListener('mousedown', (e) => {
    isDragging = true;  
    startX = e.pageX - offsetX;  
    startY = e.pageY - offsetY;  
    wrap.style.cursor = 'grabbing';
    e.preventDefault();
});

wrap.addEventListener('mousemove', (e) => {
    if (!isDragging) return;  

    const moveX = e.pageX - startX;  
    const moveY = e.pageY - startY; 

    offsetX = moveX;  
    offsetY = moveY;
    console.log(`${moveX}`)
    console.log(`${moveY}`)
    // if(moveX > 950 || moveY > 715) return;
    // if(moveX < -950 || moveY > 715) return;
    // if(moveX > 950 || moveY < -715) return;
    // if(moveX < -950 || moveY < -715 ) return;
    

    wrap.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});

wrap.addEventListener('mouseup', () => {
    isDragging = false; 
    wrap.style.cursor = 'grab';
});

wrap.addEventListener('mouseleave', () => {
    isDragging = false;
    wrap.style.cursor = 'grab';
});



