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
    height: 50px;
    background-color: black;
    color: white;
    font-size: 36px;
`;

const picture = `
    width: 1980px;
    height: 1280px;
    display: flex;
    align-items: center;
    position: relative;
`;
const pictureContent =  `
    color: yellow;
    font-size: 44px;
    margin-left: 15%;
    z-index: 2;
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
const pictureFirstContent = document.createElement('div');
const pictureFirstShadow = document.createElement('div');

pictureFirst.style.cssText = `background: url(./png/png1.jpg);${picture}`;
pictureFirstContent.style.cssText = `${pictureContent}`;
pictureFirstShadow.style.cssText = `${pictureShadow}`;

const pictureSecond = document.createElement('div');
const pictureSecondContent = document.createElement('div');
const pictureSecondShadow = document.createElement('div');

pictureSecond.style.cssText = `background: url(./png/png2.jpg);${picture}`;
pictureSecondContent.style.cssText = `${pictureContent}`;
pictureSecondShadow.style.cssText = `${pictureShadow}`;

const pictureThird = document.createElement('div');
const pictureThirdContent = document.createElement('div');
const pictureThirdShadow = document.createElement('div');

pictureThird.style.cssText = `background: url(./png/png3.jpg);${picture}`;
pictureThirdContent.style.cssText = `${pictureContent}`;
pictureThirdShadow.style.cssText = `${pictureShadow}`;

body.insertAdjacentElement('beforeend', clock);
body.insertAdjacentElement('beforeend', pictureFirst);
body.insertAdjacentElement('beforeend', pictureSecond);
body.insertAdjacentElement('beforeend', pictureThird);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstShadow);
pictureFirst.insertAdjacentElement('beforeend', pictureFirstContent);
pictureFirstContent.textContent = `Хотите научиться игре на пианино?`;
pictureSecond.insertAdjacentElement('beforeend', pictureSecondShadow);
pictureSecond.insertAdjacentElement('beforeend', pictureSecondContent);
pictureSecondContent.textContent = `С нами ты сможешь достич мечты`;
pictureThird.insertAdjacentElement('beforeend', pictureThirdContent);
pictureThird.insertAdjacentElement('beforeend', pictureThirdShadow);
pictureThirdContent.textContent = `Давай же начнём`;

function giveTime() {
    setInterval( () => {
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
    }, 1000)
}
giveTime()