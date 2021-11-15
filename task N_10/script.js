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
    console.log(arrColor)
    const random = (n, m) => Math.floor(Math.random() * (m - n + 1)) + n;

    for (let i of arrColor) {
        console.log(arrColor[random(1, arrColor.length - 1)]);
    }
};

randomColor(color);
