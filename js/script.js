let [...slides] = document.querySelectorAll('.slide');
let [...lines] = document.querySelectorAll('.line');
let slider = document.querySelector('.pictures');
slider.addEventListener('mouseover', () => {
    slides.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
    lines.forEach(element => {
        element.style.animationPlayState = 'paused';
    });
});
slider.addEventListener('mouseleave', () => {
    slides.forEach(element => {
        element.style.animationPlayState = 'running';
    });
    lines.forEach(element => {
        element.style.animationPlayState = 'running';
    });
});