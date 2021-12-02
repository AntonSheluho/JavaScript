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
const keyMy1 = document.createElement('div');
const keyFu1 = document.createElement('div');
const keySol1 = document.createElement('div');
const keyLea1 = document.createElement('div');
const keySee1 = document.createElement('div');
const keyDo2 = document.createElement('div');
const keyRe2 = document.createElement('div');
const keyMy2 = document.createElement('div');
const keyFu2 = document.createElement('div');
const keySol2 = document.createElement('div');
const keyLea2 = document.createElement('div');
const keySee2 = document.createElement('div');
const keyDo3 = document.createElement('div');
const key = `
    width: 6.66%;
    height: 80%;
    border-radius: 5%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

keyDo1.style.cssText = `${key}`;
keyRe1.style.cssText = `${key}`;
keyMy1.style.cssText = `${key}`;
keyFu1.style.cssText = `${key}`;
keySol1.style.cssText = `${key}`;
keyLea1.style.cssText = `${key}`;
keySee1.style.cssText = `${key}`;
keyDo2.style.cssText = `${key}`;
keyRe2.style.cssText = `${key}`;
keyMy2.style.cssText = `${key}`;
keyFu2.style.cssText = `${key}`;
keySol2.style.cssText = `${key}`;
keyLea2.style.cssText = `${key}`;
keySee2.style.cssText = `${key}`;
keyDo3.style.cssText = `${key}`;

piano.style.cssText = `
    width: 80%;
    height: 40%;
    background-color: white;
    z-index: 2;
    display: flex;
    flex-direction: row;
`;

keyDo1.innerHTML = `<strong>A</strong> (До)`;
keyRe1.innerHTML = `<strong>S</strong> (До)`;
keyMy1.innerHTML = `<strong>D</strong> (До)`;
keyFu1.innerHTML = `<strong>F</strong> (До)`;
keySol1.innerHTML = `<strong>G</strong> (До)`;
keyLea1.innerHTML = `<strong>H</strong> (До)`;
keySee1.innerHTML = `<strong>J</strong> (До)`;
keyDo2.innerHTML = `<strong>K</strong> (До)`;
keyRe2.innerHTML = `<strong>L</strong> (До)`;
keyMy2.innerHTML = `<strong>:</strong> (До)`;
keyFu2.innerHTML = `<strong>"</strong> (До)`;
keySol2.innerHTML = `<strong>|</strong> (До)`;
keyLea2.innerHTML = `<strong>4</strong> (До)`;
keySee2.innerHTML = `<strong>5</strong> (До)`;
keyDo3.innerHTML = `<strong>6</strong> (До)`;

body.insertAdjacentElement('afterbegin', bodyShadow);
body.insertAdjacentElement('beforeend', note);
body.insertAdjacentElement('beforeend', piano);
note.insertAdjacentElement('beforeend', title);
piano.insertAdjacentElement('beforeend', keyDo1);
piano.insertAdjacentElement('beforeend', keyRe1);
piano.insertAdjacentElement('beforeend', keyMy1);
piano.insertAdjacentElement('beforeend', keyFu1);
piano.insertAdjacentElement('beforeend', keySol1);
piano.insertAdjacentElement('beforeend', keyLea1);
piano.insertAdjacentElement('beforeend', keySee1);
piano.insertAdjacentElement('beforeend', keyDo2);
piano.insertAdjacentElement('beforeend', keyRe2);
piano.insertAdjacentElement('beforeend', keyMy2);
piano.insertAdjacentElement('beforeend', keyFu2);
piano.insertAdjacentElement('beforeend', keySol2);
piano.insertAdjacentElement('beforeend', keyLea2);
piano.insertAdjacentElement('beforeend', keySee2);
piano.insertAdjacentElement('beforeend', keyDo3);




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