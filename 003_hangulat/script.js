const slider = document.querySelector('#csuszka')
//console.log(slider)

slider.addEventListener('input', mood)

function mood() {
    //console.log('asd');
    const sliderValue = parseInt(slider.value) + 1
    //console.log(sliderValue);

    const img = document.querySelector('#kep')
    //console.log(img);
    img.src = `./img/${sliderValue}.png`
}