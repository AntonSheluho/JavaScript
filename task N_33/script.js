const body = document.getElementById('body');
const head = document.getElementById('head');
const numberClock = document.getElementById('numberClock');
const clockDiv = document.getElementById('clockDiv');
const numbers = {1: {top: '7%', left: '67%'},
                2: {top: '23%', left: '83%'},
                3: {top: '45%', left: '89%'},
                4: {top: '67%', left: '83%'},
                5: {top: '83%', left: '67%'},
                6: {top: '89%', left: '45%'},
                7: {top: '83%', left: '23%'},
                8: {top: '67%', left: '7%'},
                9: {top: '45%', left: '1%'},
                10: {top: '23%', left: '7%'},
                11: {top: '7%', left: '23%'},
                12: {top: '1%', left: '45%'}
};
const numberStyle = `width: 10%; height: 10%; background-color: white;
                    position: absolute; ; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center; font-weight: 600;`;

document.getElementById('clock').style.display = 'none';

buttOk.onclick = function() {
    if (clockDiameter.value != '') {
        head.insertAdjacentHTML('beforeend', getStyleArrow());
    } else {
        alert('Введите диаметр циферблата');
        return
    }

    formForEnter.style.display = 'none';
    document.getElementById('clock').style.display = 'block';
    clockDiv.insertAdjacentHTML('afterbegin', getNumber());

    function getNumber() {
        let numb = 1;
        let numbAcc = ``;
    
        for (let i = 1; i <= Object.keys(numbers).length; i++) {
            numbAcc += `<div style="${numberStyle} top: ${numbers[i].top}; left: ${numbers[i].left};">${numb++}</div>`
        }

        console.log(numbAcc)
    
        return numbAcc
    }
} 

function getTime() {
    const deg = 6;
    const numberClock = document.getElementById('numberClock');
    const hourArrow = document.getElementById('hourArrow');
    const minArrow = document.getElementById('minArrow');
    const secArrow = document.getElementById('secArrow');
    setInterval(() => {
        const date = new Date;
        const hour = date.getHours() * 30;
        const min = date.getMinutes() * deg;
        const sec = date.getSeconds() * deg;
        hourArrow.style.transform = `rotateZ(${hour + (min / 12)}deg)`;
        minArrow.style.transform = `rotateZ(${min}deg)`;
        secArrow.style.transform = `rotateZ(${sec}deg)`;
        let numbHour = date.getHours();
        let numbMin = date.getMinutes();
        let numbSec = date.getSeconds();
        if (numbHour < 10) {
            numbHour = '0' + numbHour;
        }
        if (numbMin < 10) {
            numbMin = '0' + numbMin;
        }
        if (numbSec < 10) {
            numbSec = '0' + numbSec;
        }
        numberClock.textContent = `${numbHour}:${numbMin}:${numbSec}`;
        console.log(`${numbHour}:${numbMin}:${numbSec}`)
    }, 1000)

    
} 
getTime()


function getStyleArrow() {
    document.getElementById('clock').style.cssText = `
        display: block; 
        width: ${clockDiameter.value + 'px'}; 
        position: relative; 
        height: ${clockDiameter.value + 'px'};`

    clockDiv.style.cssText = `
        background-color: green;
        width: 100%; 
        height: 100%;
        border-radius: 50%; 
        position: relative;`;

    document.getElementById('numberClock').style.cssText = `
        position: absolute; 
        top: 20%; left: 35%; 
        width: 30%; 
        height: 10%; 
        background-color: white;
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-weight: 600;
    `
    document.getElementById('hourArrow').style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: black;
        transform: rotate(0deg);
        width: 3%;
        height: 3%;
        top: 48.5%;
        left: 48.5%;
    `
    document.getElementById('hourArrow').style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: black;
        transform: rotate(0deg);
        width: 3%;
        height: 3%;
        top: 48.5%;
        left: 48.5%;
    `
    document.getElementById('minArrow').style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: black;
        transform: rotate(0deg);
        width: 3%;
        height: 3%;
        top: 48.5%;
        left: 48.5%;
    `
    document.getElementById('secArrow').style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: black;
        transform: rotate(0deg);
        width: 3%;
        height: 3%;
        top: 48.5%;
        left: 48.5%;
    `

    document.getElementById('hourArrowBefore').style.cssText = `
        position: absolute;
        top: -980%;
        left: 25%;
        width: 50%;
        height: 1000%;
        background-color: black;
    `
    

    document.getElementById('minArrowBefore').style.cssText = `
        position: absolute;
        top: -1110%;
        left: 33%;
        width: 33%;
        height: 1200%;
        background-color: black;
    `

    document.getElementById('secArrowBefore').style.cssText = `
        position: absolute;
        top: -1250%;
        left: 40%;
        width: 20%;
        height: 1400%;
        background-color: red;
    `
}
// background-color: rgba(255, 255, 255, 0);