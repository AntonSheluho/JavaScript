//                            Вёрстка HTML:

/*
    Body HTML 
*/
const body = document.getElementById('body');

body.style.cssText = `
    width: 100vw;
    height: 100vh;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/*
    Game field
*/

const centerDiv = document.createElement('div');

centerDiv.style.cssText = `
    width: 1000px;
    height: 655px;
`;

body.insertAdjacentElement('afterbegin', centerDiv);

/*
    Score field
*/    

const form = document.createElement('form');

form.style.cssText = `
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: space-around;
`

centerDiv.insertAdjacentElement('afterbegin', form);

const button = document.createElement('input');

button.type = 'button';
button.value = 'Start !';
button.style.cssText = `
    width: 10%;
    height: 30%;
`;

form.insertAdjacentElement('afterbegin', button);
   
class Score {
    constructor(side, score) {
        this.side = side,
        this.score = score
        console.log(this)
    }

    win() {
        this.score += 1
        if (this.side == 'left') {
            scoresLeft.innerHTML = `${this.score}`
        } else if (this.side == 'right') {
            scoresRight.innerHTML = `${this.score}`
        }
    }

    pushUp() {
        if (this.score > 0) {
            this.score -= 10
        } 
    }
    pushDown() {
        if (this.score < 460) {
            this.score += 10
        } 
    }

    moveUp() {
        this.score += 1;
    }
    moveDown() {
        this.score -= 1;
    }
}

const leftPlayer = new Score('left', 0);
const rightPlayer = new Score('right', 0);

/*
    Tennis field
*/ 

const scoresField = document.createElement('div');
const scoresLeft = document.createElement('div');
const scoresCenter = document.createElement('div');
const scoresRight = document.createElement('div');

form.insertAdjacentElement('beforeend', scoresField);
scoresField.insertAdjacentElement('beforeend', scoresLeft);
scoresField.insertAdjacentElement('beforeend', scoresCenter);
scoresField.insertAdjacentElement('beforeend', scoresRight);

scoresField.style.cssText = `
    display: flex;
    flex-direction: columns;
`;
scoresLeft.style.fontSize = '40px';
scoresCenter.style.fontSize = '40px';
scoresRight.style.fontSize = '40px';



scoresLeft.innerHTML = `${leftPlayer.score}`
scoresCenter.innerHTML = `:`;
scoresRight.innerHTML = `${rightPlayer.score}`

const gameField = document.createElement('div');

gameField.style.cssText = `
    width: 1000px;
    height: 560px;
    background: #10bdc066;
    position: relative;
    display: flex;
    justify-content: space-between;
    border: solid 1px black;
`;

centerDiv.insertAdjacentElement('beforeend', gameField);

const leftCase = document.createElement('div')
const rightCase = document.createElement('div')
const boll = document.createElement('div')

boll.style.cssText = `
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
`;
leftCase.style.cssText = `
    position: relative;
    width: 10px;
    height: 560px;
`;
rightCase.style.cssText = `
    position: relative;
    width: 10px;
    height: 560px;
`;

gameField.insertAdjacentElement('beforeend', leftCase);
gameField.insertAdjacentElement('beforeend', rightCase);
gameField.insertAdjacentElement('beforeend', boll);

const leftCaseRocket = document.createElement('div');
const rightCaseRocket = document.createElement('div');
const leftRocket = new Score('left', 0);
const rightRocket = new Score('right', 0);

leftCaseRocket.style.cssText = `
    width: 10px;
    height: 100px;
    background-color: red;
    position: absolute;
    top: 0px;
    left: 0px;
`;
rightCaseRocket.style.cssText = `
    width: 10px;
    height: 100px;
    background-color: blue;
    position: absolute;
    top: 0px;
    left: 0px;
`;

leftCase.insertAdjacentElement('beforeend', leftCaseRocket);
rightCase.insertAdjacentElement('beforeend', rightCaseRocket);

//                                             Анимация JavaScript:

/*
    Rockets movement
*/
document.addEventListener('keydown', pushRocket)

function pushRocket(event) {
    switch (event.keyCode) {
        case 16: {
            leftRocket.pushUp()
            leftCaseRocket.style.top = `${leftRocket.score}px`;
            break
        };
        case 17: {
            leftRocket.pushDown()
            leftCaseRocket.style.top = `${leftRocket.score}px`;
            break
        };
        case 38: {
            rightRocket.pushUp()
            rightCaseRocket.style.top = `${rightRocket.score}px`;
            break
        };
        case 40: {
            rightRocket.pushDown()
            rightCaseRocket.style.top = `${rightRocket.score}px`;
            break
        };
    }
}

/*
    Boll movement
*/
const bollLeft = new Score('left', 500);
const bollTop = new Score('top', 235);

boll.style.left = `${bollLeft.score}px`
boll.style.top = `${bollTop.score}px`

function getRandomNumber() {
        return Math.floor(Math.random() * 4);
    }

function moveBollOnTheRightDown() {
    bollTop.moveUp();
    bollLeft.moveUp();
    boll.style.top = `${bollTop.score}px`
    boll.style.left = `${bollLeft.score}px`
}
function moveBollOnTheRightUp() {
    bollTop.moveDown();
    bollLeft.moveUp();
    boll.style.top = `${bollTop.score}px`
    boll.style.left = `${bollLeft.score}px`
}
function moveBollOnTheLeftDown() {
    bollTop.moveUp();
    bollLeft.moveDown();
    boll.style.top = `${bollTop.score}px`
    boll.style.left = `${bollLeft.score}px`
}
function moveBollOnTheLeftUp() {
    bollTop.moveDown();
    bollLeft.moveDown();
    boll.style.top = `${bollTop.score}px`
    boll.style.left = `${bollLeft.score}px`
}

button.onclick = function() {

    switch (getRandomNumber()){
        case 0: {
            setInterval(moveBollOnTheRightDown, 20);
            break
        };
        case 1: {
            setInterval(moveBollOnTheRightUp, 20);
            break
        };
        case 2: {
            setInterval(moveBollOnTheLeftDown, 20);
            break
        };
        case 3: {
            setInterval(moveBollOnTheLeftUp, 20);
            break
        };
    }

}
const whereIsBoll = new Event(look);
document.dispatchEvent(whereIsBoll);
boll.addEventListener('DOMNodeInserted', () => {console.log(boll.style.top)})

const bollEvent = setInterval(() => {
    const bollTop = parseInt(window.getComputedStyle(boll).getPropertyValue('top'));
    const bollLeft = parseInt(window.getComputedStyle(boll).getPropertyValue('left'));
    console.log(bollTop + '', bollLeft)

    if (bollTop == 0 && bollLeft < 500) {
        moveBollOnTheLeftDown();
    } else if (bollTop > 0 && bollLeft == 0) {
        moveBollOnTheLeftUp();
    } else if (bollTop == 522 && bollLeft > 0) {
        moveBollOnTheRightUp();
    }
}, 10)
