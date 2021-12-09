//                     I make site

/* 
    Site
*/

const body = document.getElementById('body');

body.style.cssText = `
    margin: auto;
`


const clock = document.createElement('div');

clock.style.cssText = `
    width: 100vw;
    height: 5vh;
    background-color: black;
    color: white;
    font-size: 36px;
`;

const picture = `
    width: 100vw;
    height: 95vh;
    position: relative;
`;
const pictureContent =  `
    color: yellow;
    font-size: 44px;
    z-index: 2;
    position: absolute;
    transition-duration: 2s;
`;
const pictureShadow = `
    background-color: rgb(0 0 0 / 68%);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

const pictureFirst = document.createElement('div');
const pictureFirstContent1 = document.createElement('div');
const pictureFirstContent2 = document.createElement('div');
const pictureFirstContent3 = document.createElement('a');
const pictureFirstShadow = document.createElement('div');

// pictureFirstContent3.getAttribute(`href="./piano.html"`)
pictureFirstContent3.href = `./piano.html`;

pictureFirst.style.cssText = `background: url(./png/png3.jpg);${picture}`;
pictureFirstContent1.style.cssText = `${pictureContent} top: 30%; left: -40%`;
pictureFirstContent2.style.cssText = `${pictureContent} top: 45%; left: -40%`;
pictureFirstContent3.style.cssText = `${pictureContent} text-decoration: none; top: 60%; left: -40%`;
pictureFirstShadow.style.cssText = `${pictureShadow}`;

// const pictureSecond = document.createElement('div');
// const pictureSecondContent = document.createElement('div');
// const pictureSecondShadow = document.createElement('div');

// pictureSecond.style.cssText = `background: url(./png/png2.jpg);${picture}`;
// pictureSecondShadow.style.cssText = `${pictureShadow}`;

// const pictureThird = document.createElement('div');
// const pictureThirdContent = document.createElement('div');
// const pictureThirdShadow = document.createElement('div');

// pictureThird.style.cssText = `background: url(./png/png3.jpg);${picture}`;
// pictureThirdShadow.style.cssText = `${pictureShadow}`;

body.insertAdjacentElement('beforeend', clock);
body.insertAdjacentElement('beforeend', pictureFirst);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstShadow);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstContent1);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstContent2);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstContent3);
pictureFirstContent1.textContent = `Хочешь научиться игре на пианино?`;
pictureFirstContent2.textContent = `С нами ты сможешь достич мечты!`;
pictureFirstContent3.textContent = `Кликай сюда`;
// pictureSecond.insertAdjacentElement('beforeend', pictureSecondShadow);
// pictureSecond.insertAdjacentElement('beforeend', pictureSecondContent);
// body.insertAdjacentElement('beforeend', pictureSecond);
// body.insertAdjacentElement('beforeend', pictureThird);
// pictureThird.insertAdjacentElement('beforeend', pictureThirdContent);
// pictureThird.insertAdjacentElement('beforeend', pictureThirdShadow);

setTimeout((() => pictureFirstContent1.style.left = `30%`), 500);
setTimeout((() => pictureFirstContent2.style.left = `30.5%`), 1500);
setTimeout((() => pictureFirstContent3.style.left = `40%`), 2500);

function giveTime() {
    
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    if (hour < 10) {
        hour = '0' + hour;
    };
    if (min < 10) {
        min = '0' + min;
    }

    clock.textContent = `${hour} : ${min}`;
    
}
giveTime()
setInterval(giveTime, 1000)