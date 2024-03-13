let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let sliderDom = document.querySelector('.slider');
let toggleUp1 = document.getElementById('popup-1');
let toggleUp2 = document.getElementById('popup-2');
let toggleUp3 = document.getElementById('popup-3');
let toggleUp4 = document.getElementById('popup-4');
let toggleUp5 = document.getElementById('popup-5');
let toggleUp6 = document.getElementById('popup-6');
let toggleUp7 = document.getElementById('popup-7');
let toggleUp8 = document.getElementById('popup-8');
let toggleUp9 = document.getElementById('popup-9');
let toggleUp10 = document.getElementById('popup-10');
let toggleUp11 = document.getElementById('popup-11');
let toggleUp12 = document.getElementById('popup-12');
let toggleUp13 = document.getElementById('popup-13');
let toggleUp14 = document.getElementById('popup-14');
let toggleUp15 = document.getElementById('popup-15');
let listItemDom = document.querySelector('.slider .list');
let thumbnailDom = document.querySelector('.slider .thumbnail');
let video1 = document.getElementById("vid-1");
let video2 = document.getElementById("vid-2");
let video3 = document.getElementById("vid-3");
let video4 = document.getElementById("vid-4");
let video5 = document.getElementById('vid-5');
let video6 = document.getElementById('vid-6');
let video7 = document.getElementById('vid-7');
let video8 = document.getElementById('vid-8');
let video9 = document.getElementById('vid-9');


nextDom.onclick = function(){
    showSlide('next');
    toggleUp1.classList.remove('active');
    toggleUp2.classList.remove('active');
    toggleUp3.classList.remove('active');
    toggleUp4.classList.remove('active');
    toggleUp5.classList.remove('active');
    toggleUp6.classList.remove('active');
    toggleUp7.classList.remove('active');
    toggleUp8.classList.remove('active');
    toggleUp9.classList.remove('active');
    toggleUp10.classList.remove('active');
    toggleUp11.classList.remove('active');
    toggleUp12.classList.remove('active');
    toggleUp13.classList.remove('active');
    toggleUp14.classList.remove('active');
    toggleUp15.classList.remove('active');
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();
    video7.pause();
    video8.pause();
    video9.pause();
}
prevDom.onclick = function(){
    showSlide('prev');
    toggleUp1.classList.remove('active');
    toggleUp2.classList.remove('active');
    toggleUp3.classList.remove('active');
    toggleUp4.classList.remove('active');
    toggleUp5.classList.remove('active');
    toggleUp6.classList.remove('active');
    toggleUp7.classList.remove('active');
    toggleUp8.classList.remove('active');
    toggleUp9.classList.remove('active');
    toggleUp10.classList.remove('active');
    toggleUp11.classList.remove('active');
    toggleUp12.classList.remove('active');
    toggleUp13.classList.remove('active');
    toggleUp14.classList.remove('active');
    toggleUp15.classList.remove('active');
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();
    video7.pause();
    video8.pause();
    video9.pause();
}
let timeRunning = 3000;
let runTimeOut;

function showSlide(type){
    let itemSlide = document.querySelectorAll('.slider .list .item');
    let itemThumbnail = document.querySelectorAll('.slider .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlide[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        sliderDom.classList.add('next');

    }else{
        let positionLastItem = itemSlide.length - 1;
        listItemDom.prepend(itemSlide[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        sliderDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
 
    }, timeRunning)
}

function togglePopup(){
    toggleUp1.classList.toggle('active');
    toggleUp2.classList.toggle('active');
    toggleUp3.classList.toggle('active');
    toggleUp4.classList.toggle('active');
    toggleUp5.classList.toggle('active');
    toggleUp13.classList.toggle('active');
    video1.pause();
    video4.pause();
    video7.pause();
}
function togglePopup66(){
    toggleUp6.classList.toggle('active');
    // toggleUp7.classList.remove('active');
    // toggleUp8.classList.remove('active');
}
function togglePopup77(){
    // toggleUp6.classList.remove('active');
    toggleUp7.classList.toggle('active');
    // toggleUp8.classList.remove('active');
}
function togglePopup88(){
    // toggleUp6.classList.remove('active');
    // toggleUp7.classList.remove('active');
    toggleUp8.classList.toggle('active');
}
function togglePopup99(){
    toggleUp9.classList.toggle('active');
    video2.pause();
}
function togglePopup10(){
    toggleUp10.classList.toggle('active');
    video3.pause();
}
function togglePopup11(){
    toggleUp11.classList.toggle('active');
    video5.pause();
}
function togglePopup12(){
    toggleUp12.classList.toggle('active');
    video6.pause();
}
function togglePopup14(){
    toggleUp14.classList.toggle('active');
    video8.pause();
}
function togglePopup15(){
    toggleUp15.classList.toggle('active');
    video9.pause();
}
