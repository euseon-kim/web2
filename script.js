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
})

// const wrap = document.querySelector('.wrap');
// const isDragging = false;  
// let startX, startY;    
// const offsetX = 0, offsetY = 0; 

// wrap.addEventListener('mousedown', (e) => {
//     isDragging = true;  
//     startX = e.pageX - offsetX;  
//     startY = e.pageY - offsetY;  
//     wrap.style.cursor = 'grabbing';
//     e.preventDefault();
// });

// wrap.addEventListener('mousemove', (e) => {

//     const box = document.querySelector('.wrap');
//     if (!isDragging) return;  

//     const moveX = e.pageX - startX;  
//     const moveY = e.pageY - startY; 

//     offsetX = moveX;  
//     offsetY = moveY;
//     // console.log(`${moveX}`)
//     // console.log(`${moveY}`)
//     console.log(`${offsetX}`)
//     console.log(`${offsetY}`)
//     // if(moveX > 950 || moveY > 715) {
//     //     isDragging = false;
//     // }
//     // if(moveX < -950 || moveY > 715) {
//     //     isDragging = false;
//     // }
//     // if(moveX > 950 || moveY < -715) {
//     //     isDragging = false;
//     // }
//     // if(moveX < -950 || moveY < -715 ) {
//     //     isDragging = false;
//     // } 

//     wrap.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;

// });

// wrap.addEventListener('mouseup', () => {

    
//     isDragging = false; 
//     wrap.style.cursor = 'grab';
// });

// wrap.addEventListener('mouseleave', () => {
//     isDragging = false;
//     wrap.style.cursor = 'grab';
// });


const wrap = document.querySelector('.wrap');
let isDragging = false;  
let startX, startY;    
const offsetX = 1900, offsetY = 1190; 

wrap.addEventListener('mousedown', (e) => {
    isDragging = true;  
    startX = e.clientX - wrap.offsetLeft;
    startY = e.clientY - wrap.offsetTop;
    wrap.style.cursor = 'grabbing';
    e.preventDefault();
});

wrap.addEventListener('mousemove', (e) => {

    const box = document.querySelector('.wrap');
    if (!isDragging) return;  

    let newX = e.clientX - startX;
    let newY = e.clientY - startY;

    newX = Math.min(newX, offsetX);
    newX = Math.max(newX, 0);
    newY = Math.min(newY, offsetY);
    newY = Math.max(newY, 0);
    console.log(`${offsetX}`)
    console.log(`${offsetY}`)
    // if(moveX > 950 || moveY > 715) {
    //     isDragging = false;
    // }
    // if(moveX < -950 || moveY > 715) {
    //     isDragging = false;
    // }
    // if(moveX > 950 || moveY < -715) {
    //     isDragging = false;
    // }
    // if(moveX < -950 || moveY < -715 ) {
    //     isDragging = false;
    // } 

    wrap.style.left = `${newX}px`;
    wrap.style.top = `${newY}px`;

});

wrap.addEventListener('mouseup', () => {
    isDragging = false; 
    wrap.style.cursor = 'grab';
});

wrap.addEventListener('mouseleave', () => {
    isDragging = false;
    wrap.style.cursor = 'grab';
});














    // const container = document.querySelector('.wrap');
    // let isDown = false;
    // let startX, startY, scrollLeft, scrollTop;

    // container.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     startX = e.pageX - container.offsetLeft;  
    //     startY = e.pageY - container.offsetTop;   
    //     scrollLeft = container.scrollLeft;       
    //     scrollTop = container.scrollTop;       
    //     container.style.cursor = 'grabbing';     
    //     e.preventDefault();
    // });


    // container.addEventListener('mouseup', () => {
    //     isDown = false;
    //     container.style.cursor = 'grab';          
    // });

    
    // container.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     container.style.cursor = 'grab';           
    // });


    // container.addEventListener('mousemove', (e) => {
    //     if (!isDown) return;  
    //     e.preventDefault();


    //     const moveX = e.pageX - container.offsetLeft;
    //     const moveY = e.pageY - container.offsetTop;
    //     const walkX = moveX - startX;  
    //     const walkY = moveY - startY; 

    //     container.scrollLeft = scrollLeft - walkX;
    //     container.scrollTop = scrollTop - walkY;
    // });

