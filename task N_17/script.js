// Это ДЗ №7 
// N.07 Домашнее задание VOWELS
// Написать «чистую» функцию для эффективного подсчёта количества русских гласных
// букв в строке.
// Регулярные выражения (кто умеет) не использовать.
// Спросить у пользователя строку. Вывести в консоль количество русских гласных букв в
// ней.

// let a = prompt('Введите текст');
// function vowels(string) {
//     let vow = 'ауоыэяюёийеАУОЫЭЯЮЁИЙЕ';
//     let rez = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (vow.includes(string[i])) {
//             rez += 1
//        };
//     };
//     return rez;
// };
// console.log(vowels(a));
//---------------------------------------------------------------------------------------------------------------------

//  ДЗ №17

const string = function () {
    let text = prompt('Введите текст');
    while (!isNaN(text) || text === null || text === '') {
        text = prompt('Введите текст');
    }
    return text
}

function vowels(str) {
    let vow = 'ауоыэяюёийеАУОЫЭЯЮЁИЙЕ';
    let acc = str.split('');
    let forEachAcc = [];

    acc.forEach(el => {
        if (vow.includes(el)) {
            forEachAcc[forEachAcc.length] = el;
        }
    });

    console.log(`Here numbers of vowels letters from forEach: ${forEachAcc.length}`)
    console.log(`Here letters from forEach: ${forEachAcc}`)

    let filterAcc = [];

    acc.filter(el => {
        if (vow.includes(el)) {
            filterAcc[filterAcc.length] = el;
        }
    })

    console.log(`Here numbers of vowels letters from filter: ${filterAcc.length}`)
    console.log(`Here letters from filter: ${filterAcc}`)
    
    let reduceAcc = [];
    acc.reduce(function(ac, el) {
        console.log(ac)
        console.log(el)
        console.log(`if ac ${vow.includes(ac)}`)
        console.log(`if ac ${vow.includes(el)}`)
        if (vow.includes(ac) && vow.includes(el)) {
            reduceAcc[reduceAcc.length] = ac;
            reduceAcc[reduceAcc.length] = el;
            console.log(`redAcc: ${reduceAcc}`)
        } else if (vow.includes(el)) {
            reduceAcc[reduceAcc.length] = el;
            console.log(`redAcc: ${reduceAcc}`)
        } else if (vow.includes(ac)) {
            reduceAcc[reduceAcc.length] = ac;
        }
    }, 0);
    
    console.log(`Here numbers of vowels letters from reduce: ${reduceAcc.length}`)
    console.log(`Here letters from reduce: ${reduceAcc}`)
};

vowels(string())

