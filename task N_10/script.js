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