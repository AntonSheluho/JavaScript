const body = document.getElementById('body');

body.style.cssText = `
    margin: auto;
    background: url(./png/png5.jpg);
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 70px;
`;

const bodyShadow = document.createElement('div');

bodyShadow.style.cssText = `
    background-color: rgb(0 0 0 / 68%);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

const note = document.createElement('div');
const title = document.createElement('div');
const song1 = document.createElement('div');

note.style.cssText = `
    width: 70%;
    height: 40%;
    background-color: white;
    z-index: 2;
`;
title.style.cssText = `font-size: 24px;`;
title.textContent = `Вы можете выбрать шаблон:`

const piano = document.createElement('div');
const keyDo1 = document.createElement('div');
const keyRe1 = document.createElement('div');
const keyMi1 = document.createElement('div');
const keyFa1 = document.createElement('div');
const keySol1 = document.createElement('div');
const keyLya1 = document.createElement('div');
const keySi1 = document.createElement('div');
const keyDo2 = document.createElement('div');
const keyRe2 = document.createElement('div');
const keyMi2 = document.createElement('div');
const keyFa2 = document.createElement('div');
const keySol2 = document.createElement('div');
const keyLya2 = document.createElement('div');
const keySi2 = document.createElement('div');
const keyDo3 = document.createElement('div');
const key = `
    width: 6.66%;
    height: 100%;
    border-radius: 5%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

keyDo1.style.cssText = `${key}`;
keyRe1.style.cssText = `${key}`;
keyMi1.style.cssText = `${key}`;
keyFa1.style.cssText = `${key}`;
keySol1.style.cssText = `${key}`;
keyLya1.style.cssText = `${key}`;
keySi1.style.cssText = `${key}`;
keyDo2.style.cssText = `${key}`;
keyRe2.style.cssText = `${key}`;
keyMi2.style.cssText = `${key}`;
keyFa2.style.cssText = `${key}`;
keySol2.style.cssText = `${key}`;
keyLya2.style.cssText = `${key}`;
keySi2.style.cssText = `${key}`;
keyDo3.style.cssText = `${key}`;

piano.style.cssText = `
    width: 80%;
    height: 40%;
    z-index: 2;
    display: flex;
    flex-direction: row;
`;

keyDo1.innerHTML = `<strong>A</strong> (До)`;
keyRe1.innerHTML = `<strong>S</strong> (Ре)`;
keyMi1.innerHTML = `<strong>D</strong> (Ми)`;
keyFa1.innerHTML = `<strong>F</strong> (Фа)`;
keySol1.innerHTML = `<strong>G</strong> (Соль)`;
keyLya1.innerHTML = `<strong>H</strong> (Ля)`;
keySi1.innerHTML = `<strong>J</strong> (Си)`;
keyDo2.innerHTML = `<strong>K</strong> (До)`;
keyRe2.innerHTML = `<strong>L</strong> (Ре)`;
keyMi2.innerHTML = `<strong>:</strong> (Ми)`;
keyFa2.innerHTML = `<strong>"</strong> (Фа)`;
keySol2.innerHTML = `<strong>|</strong> (Соль)`;
keyLya2.innerHTML = `<strong>4</strong> (Ля)`;
keySi2.innerHTML = `<strong>5</strong> (Си)`;
keyDo3.innerHTML = `<strong>6</strong> (До)`;

body.insertAdjacentElement('afterbegin', bodyShadow);
body.insertAdjacentElement('beforeend', note);
body.insertAdjacentElement('beforeend', piano);
note.insertAdjacentElement('beforeend', title);
piano.insertAdjacentElement('beforeend', keyDo1);
piano.insertAdjacentElement('beforeend', keyRe1);
piano.insertAdjacentElement('beforeend', keyMi1);
piano.insertAdjacentElement('beforeend', keyFa1);
piano.insertAdjacentElement('beforeend', keySol1);
piano.insertAdjacentElement('beforeend', keyLya1);
piano.insertAdjacentElement('beforeend', keySi1);
piano.insertAdjacentElement('beforeend', keyDo2);
piano.insertAdjacentElement('beforeend', keyRe2);
piano.insertAdjacentElement('beforeend', keyMi2);
piano.insertAdjacentElement('beforeend', keyFa2);
piano.insertAdjacentElement('beforeend', keySol2);
piano.insertAdjacentElement('beforeend', keyLya2);
piano.insertAdjacentElement('beforeend', keySi2);
piano.insertAdjacentElement('beforeend', keyDo3);

const audioDo1 = new Audio('./audio/do.mp3');
const audioRe1 = new Audio('./audio/re.mp3');
const audioMi1 = new Audio('./audio/mi.mp3');
const audioFa1 = new Audio('./audio/fa.mp3');
const audioSol1 = new Audio('./audio/sol.mp3');
const audioLya1 = new Audio('./audio/lya.mp3');
const audioSi1 = new Audio('./audio/si.mp3');
const audioDo2 = new Audio('./audio/doVtoroyOktave.mp3');
const audioRe2 = new Audio('./audio/re.mp3');
const audioMi2 = new Audio('./audio/mi.mp3');
const audioFa2 = new Audio('./audio/fa.mp3');
const audioSol2 = new Audio('./audio/sol.mp3');
const audioLya2 = new Audio('./audio/lya.mp3');
const audioSi2 = new Audio('./audio/si.mp3');
const audioDo3 = new Audio('./audio/do.mp3');

addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyA': {keyDo1.style.backgroundColor = `red`; audioDo1.play(); break};
        case 'KeyS': {keyRe1.style.backgroundColor = `orange`; audioRe1.play(); break};
        case 'KeyD': {keyMi1.style.backgroundColor = `yellow`; audioMi1.play(); break};
        case 'KeyF': {keyFa1.style.backgroundColor = `green`; audioFa1.play(); break};
        case 'KeyG': {keySol1.style.backgroundColor = `blue`; audioSol1.play(); break};
        case 'KeyH': {keyLya1.style.backgroundColor = `indigo`; audioLya1.play(); break};
        case 'KeyJ': {keySi1.style.backgroundColor = `violet`; audioSi1.play(); break};
        case 'KeyK': {keyDo2.style.backgroundColor = `red`; audioDo2.play(); break};
        case 'KeyL': {keyRe2.style.backgroundColor = `orange`; audioRe2.play(); break};
        case 'Semicolon': {keyMi2.style.backgroundColor = `yellow`; audioMi2.play(); break};
        case 'Quote': {keyFa2.style.backgroundColor = `green`; audioFa2.play(); break};
        case 'Backslash': {keySol2.style.backgroundColor = `blue`; audioSol2.play(); break};
        case 'Numpad4': {keyLya2.style.backgroundColor = `indigo`; audioLya2.play(); break};
        case 'Numpad5': {keySi2.style.backgroundColor = `violet`; audioSi2.play(); break};
        case 'Numpad6': {keyDo3.style.backgroundColor = `red`; audioDo3.play(); break};
    }
})

addEventListener('keyup', (event) => {
    switch (event.code) {
        case 'KeyA': {keyDo1.style.backgroundColor = `white`; audioDo1.load(); break}
        case 'KeyS': {keyRe1.style.backgroundColor = `white`; audioRe1.load(); break};
        case 'KeyD': {keyMi1.style.backgroundColor = `white`; audioMi1.load(); break};
        case 'KeyF': {keyFa1.style.backgroundColor = `white`; audioFa1.load(); break};
        case 'KeyG': {keySol1.style.backgroundColor = `white`; audioSol1.load(); break};
        case 'KeyH': {keyLya1.style.backgroundColor = `white`; audioLya1.load(); break};
        case 'KeyJ': {keySi1.style.backgroundColor = `white`; audioSi1.load(); break};
        case 'KeyK': {keyDo2.style.backgroundColor = `white`; audioDo2.load(); break};
        case 'KeyL': {keyRe2.style.backgroundColor = `white`; audioRe2.load(); break};
        case 'Semicolon': {keyMi2.style.backgroundColor = `white`; audioMi2.load(); break};
        case 'Quote': {keyFa2.style.backgroundColor = `white`; audioFa2.load(); break};
        case 'Backslash': {keySol2.style.backgroundColor = `white`; audioSol2.load(); break};
        case 'Numpad4': {keyLya2.style.backgroundColor = `white`; audioLya2.load(); break};
        case 'Numpad5': {keySi2.style.backgroundColor = `white`; audioSi2.load(); break};
        case 'Numpad6': {keyDo3.style.backgroundColor = `white`; audioDo3.load(); break};
    }
})




// function getNumb(event) {
//     console.log(event.code)
// };
// document.addEventListener('keydown', getNumb)


// function getTwoKeys(func, ...codes) {
//     let acc = new Set();
//     document.addEventListener('keydown', function(event) {
//         acc.add(event.code);

//         for (let el of codes) {
//             if (!acc.has(el)) {
//                 return
//             }
//         }

//         acc.clear();

//         func();
//     });

//     document.addEventListener('keyup', function(event) {
//         acc.delete(event.code)
//     })
// }

// getTwoKeys(() => console.log('yes'), 'ShiftLeft', 'KeyA')