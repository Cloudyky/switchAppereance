const switchTag = document.getElementsByClassName('switch')[0],
        sliderTag = document.getElementsByClassName('slider'),
        appImg = document.getElementsByClassName('app-img')[0],
        bodyTag = document.querySelector('body');

let light = 0,
    dark = 1,
    appApereance = light;

function changeApereance() {
    if(appApereance === light){
        appApereance = dark;
        console.log(appApereance);
        switchTag.style.justifyContent = 'flex-end';
        appImg.src = './img/dark.png';
        bodyTag.style.background = 'black';
    }else{
        appApereance = light;
        console.log(appApereance);
        switchTag.style.justifyContent = 'flex-start';
        appImg.src = './img/light.png';
        bodyTag.style.background = 'white';
    }
}

switchTag.addEventListener('click', changeApereance);
