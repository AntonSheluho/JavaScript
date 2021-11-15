// Спасибо Брэндан Эйх за регулярные выражения

let text = prompt('Введите текст');

function f1(vowels, rez) {
    rez = 0
    for (let i = 0; i < vowels.length; i++) {
        if (/^[аеёийоуыэ-яАЕЁИЙОУЫЭ-Я]+$/.test(vowels[i])) {
            rez += 1
        };
    };
    return rez;
}

console.log(f1(text));

// Вот решение по заданию без регулярных выражений первая попытка, ниже лучше!!!

let text = prompt('Введите текст');

function f1(vowels, rez) {
    rez = 0
    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === 'а' || 
            vowels[i] === 'у' || 
            vowels[i] === 'о' || 
            vowels[i] === 'ы' || 
            vowels[i] === 'и' || 
            vowels[i] === 'й' || 
            vowels[i] === 'э' || 
            vowels[i] === 'ю' || 
            vowels[i] === 'я' || 
            vowels[i] === 'е' || 
            vowels[i] === 'ё' || 
            vowels[i] === 'А' || 
            vowels[i] === 'У' || 
            vowels[i] === 'О' || 
            vowels[i] === 'Ы' || 
            vowels[i] === 'И' ||
            vowels[i] === 'Й' ||
            vowels[i] === 'Э' ||
            vowels[i] === 'Я' ||
            vowels[i] === 'Ю' ||
            vowels[i] === 'Е' ||
            vowels[i] === 'Ё') {
                rez += 1;
        }
    };
    return rez;
}

console.log(f1(text));


// Привёл в нормальный вид с помощью => includes

let a = prompt('Введите текст');
function vowels(string) {
    let vow = 'ауоыэяюёийеАУОЫЭЯЮЁИЙЕ';
    let rez = 0;
    for (let i = 0; i < string.length; i++) {
        if (vow.includes(string[i])) {
            rez += 1
       };
    };
    return rez;
};
console.log(vowels(a));