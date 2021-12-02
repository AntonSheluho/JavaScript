//                     I make site

/* 
    Site
*/

const body = document.getElementById('body');

body.style.margin = '0px'

const clock = document.createElement('div');

const pictureFirst = document.createElement('div');
const pictureFirstContent = document.createElement('div');
const pictureFirstShadow = document.createElement('div');

const pictureSecond = document.createElement('div');
const pictureSecondContent = document.createElement('div');
const pictureSecondShadow = document.createElement('div');

const pictureThird = document.createElement('div');
const pictureThirdContent = document.createElement('div');
const pictureThirdShadow = document.createElement('div');

pictureFirst.style.cssText = `
    background: url(./png/png1.jpg);
    width: 100vw;
    height: 100vh;
`;

body.insertAdjacentHTML('afterbegin', pictureFirst);
pictureFirst.insertAdjacentHTML('beforeend', pictureFirstContent);
pictureFirst.insertAdjacentHTML('beforeend', pictureFirstShadow);