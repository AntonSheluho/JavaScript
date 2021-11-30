const body = document.getElementById('body');

body.style.cssText = `
    width: 100vw;
    height: 100vh;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const centerDiv = document.createElement('div');

centerDiv.style.cssText = `
    width: 1000px;
    height: 655px;
`;

body.insertAdjacentElement('afterbegin', centerDiv);

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

const label = document.createElement('label');

label.style.cssText = `

`

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
}

const leftPlayer = new Score('left', 0);
const rightPlayer = new Score('right', 0);

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
    height: 556px;
    background: #10bdc066;
`;

centerDiv.insertAdjacentElement('beforeend', gameField);

