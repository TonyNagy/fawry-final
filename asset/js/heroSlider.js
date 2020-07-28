console.log('slider script started');
var $$ = function (selector, context) {
    var context = context || document;
    var elements = context.querySelectorAll(selector);
    return [].slice.call(elements);
};

var transitionDelay = 4000;
var $slides = $$('.slider-page');
var $omniSlider = $$('.omni-slider');
var $currentSlide = 0;
var $nextSlide;
var $numOfSlides = $slides.length;

setTimeout(function () {
    $slides.forEach(function (slide) {
        slide.classList.remove('--active');
    });
    $slides[$currentSlide].classList.add('--active');
    $nextSlide = $currentSlide + 1;
    if($nextSlide >= $numOfSlides){
        $nextSlide = 0;
    }
    setAutosliding();
}, transitionDelay);

function setAutosliding() {
    window.clearTimeout();
    setTimeout(function () {
        $slides.forEach(function (slide) {
            slide.classList.remove('--active');
        });
        $slides[$nextSlide].classList.add('--active');
        $currentSlide = $nextSlide;
        $nextSlide = $currentSlide+1;
        if($nextSlide >= $numOfSlides){
            $nextSlide=0;
        }
        setAutosliding();
    }, transitionDelay);
}



const omni_element = document.querySelector("#omni-slider");

console.log(omni_element.classList.contains("state-1"));
var omni;
 omni = setTimeout(function () {
    if(omni_element.classList.contains("state-1")){
        omni_element.classList.remove('state-1');
        omni_element.classList.add('state-2');
    }else if(omni_element.classList.contains("state-2")){
        omni_element.classList.remove('state-2');
        omni_element.classList.add('state-3');
    }else if(omni_element.classList.contains("state-3")){
        omni_element.classList.remove('state-3');
        omni_element.classList.add('state-1');
    }
     setAutoOmniSliding();
}, transitionDelay);

function setAutoOmniSliding() {
    clearTimeout(omni);
    omni = setTimeout(function () {
        if(omni_element.classList.contains("state-1")){
            omni_element.classList.remove('state-1');
            omni_element.classList.add('state-2');
        }else if(omni_element.classList.contains("state-2")){
            omni_element.classList.remove('state-2');
            omni_element.classList.add('state-3');
        }else if(omni_element.classList.contains("state-3")){
            omni_element.classList.remove('state-3');
            omni_element.classList.add('state-1');
        }
        setAutoOmniSliding();
    }, transitionDelay);
}