//                                           This's file has three solution. Third is most correct

// First solution--------------------------------------------------------------------------------------

const color = {
    red: 'red',
    blue: 'blue',
    black: 'black',
    green: 'green',
    gray: 'gray',
    yellow: 'yellow',
    orange: 'orange',
    brown: 'brown'
};

function randomColor(colors) {

    const arrColor = Object.keys(colors);
    const random = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;

    let acc = [];
    let b;
     hi:
    while (acc.length < arrColor.length) {
        b = random(0, arrColor.length - 1);
        if (!acc.includes(b)) {
            acc[acc.length] = b;
        }
        if (acc.length == 8) {
            break hi
        }
        
    }

    for (let i = 0; i < acc.length; i++) {
        console.log(acc[i])
        console.log(arrColor[acc[i]])
    }
};

randomColor(color);

// Second solution------------------------------------------------------------------------------------

const color = new Map([
    [1, 'red'],
    [2, 'blue'],
    [3, 'black'],
    [4, 'green'],
    [5, 'gray'],
    [6, 'yellow'],
    [7, 'orange'],
    [8, 'brown'],
]);

function randomColors(colors) {

    const random = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;

    let acc = [];
    let b;

    hi:
    while (true) {

        b = random(1, colors.size);

        if (!acc.includes(b)) {
            acc[acc.length] = b;
        }

        if (acc.length == 8) {
            break hi
        }
    }

    for (let i = 0; i < acc.length; i++) {
        console.log(colors.get(acc[i]))
    }
}

randomColors(color)

// third solution -----------------------------------------------------------------------------------------------------------

const color = {
    1: 'red',
    2: 'blue',
    3: 'black',
    4: 'green',
    5: 'gray',
    6: 'yellow',
    7: 'orange',
    8: 'brown'
};

// or

// const colorMap = new Map([
//     [1, 'red'],
//     [2, 'blue'],
//     [3, 'black'],
//     [4, 'green'],
//     [5, 'gray'],
//     [6, 'yellow'],
//     [7, 'orange'],
//     [8, 'brown'],
// ]);

function randomColor() {
    
    const colorSet = new Set();
    
    const random = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;
    let a;

    do {
        a = random(1, Object.keys(color).length);
        colorSet.add(color[a]);
    } while (colorSet.size != 8);

    for (let i of colorSet) {
        console.log(i);
    }
}

// or

// function randomColor() {

//     const colorSet = new Set();
    
//     const random = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;
//     let a;

//     do {
//         a = random(1, colorMap.size);
//         colorSet.add(colorMap.get(a));
//     } while (colorSet.size != 8);

//     for (let i of colorSet) {
//         console.log(i);
//     }
// }

randomColor()