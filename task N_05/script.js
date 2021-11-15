// То что нашёл в нете( рабочая функция по подсчёту всех чисел из массива и массива из массива)

// const arr = [ 5, 7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1, 8];
// const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);
// console.log(sum(arr));
//---------------------------------------------------------------------------------------------

// Мой вариант

let arr = [ 5, 7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1, 8];

function f1(rez) {
    rez = rez.flat(Infinity);
    return rez.reduce(function f1(accumulator, currentValue) {
                return accumulator + currentValue;
        });
};    

console.log(f1(arr));