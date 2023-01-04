let currentSlide = 1;
let $slider = $(".slides");
let slideCount = $slider.children().length;
let timerInterval = 2 * 1000;
//console.log(slideCount);

setInterval(()=>{
    $slider.animate({
        marginLeft: '-=100%',
    }, 800);
}, timerInterval);