function createSlider (options) {
    let slider = options.slider;
    let slides = options.slides;

    let prevButton = options.prevButton;
    let nextButton = options.nextButton;

    let sCountFPP = options.count;

    let position = 1;
    let direction;

    let sliderSize = Math.ceil(slides.length / sCountFPP);
    let sliderWidth = sliderSize * 100;
    slider.style.width = sliderWidth + '%';

/*     slides.forEach(slide => {slide.style.width = `calc(${sliderWidth/sCountFPP/2} - 4em)`}); */


    function toRight() {
        if(direction === 'left'){position++};
        if(position > sliderSize-1){
            position = 0;
        }

        slider.style.transform = `translateX(-${position*100/sliderSize}%)`;
        position++;
        direction = 'right';
    }

    function toLeft() { 
        if(direction === 'right'){position--}
        if(position < 1){
            position = sliderSize;
        }

        slider.style.transform = `translateX(-${(position-1)*(100/sliderSize)}%`;
        position--;
        direction = 'left';
    }


    nextButton.addEventListener('click', event => {toRight() })
    document.addEventListener('keyup', event => {
        if (event.keyCode === 39) {toRight()}
    });

    prevButton.addEventListener('click', event => {toLeft()});
    document.addEventListener('keyup', event => {
        if (event.keyCode === 37) {toLeft()}
    });
}