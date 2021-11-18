function HashStorageFunc(drink, nameDrink) {
    const self = this;
    self[drink] = nameDrink;
    

    HashStorageFunc.prototype.addValue = function(key,value) {
        self[key] = value;
    }

    HashStorageFunc.prototype.getValue = function(key) {
        console.log(self[key])
        return self[key];
    }

    HashStorageFunc.prototype.deleteValue = function(key) {
        const a = Object.entries(self);
        let acc;

        for (let i = 0; i < a.length; i++) {

            if (a[i][0] == key) {
               acc = key;
               delete self[acc];
               console.log(self);
               return true
            }
        }

        console.log(false);
        return false
    }

    HashStorageFunc.prototype.getKeys = function() {
        let acc = [];
        for (let [key, value] of Object.entries(self)) {
            acc[acc.length] = key;
        }
        return acc;
    }
}

const drinkStorage = new HashStorageFunc('Budweiser', {
    'type': 'beer',
    'alcoholic': true,
    'info': 'Budweiser - легкий, ароматный, свежий лагер в американском стиле. Сварено из лучшего ячменного солода и смеси премиальных сортов хмеля.'
});

// var $html = document.getElementById('html');

// $html.innerHTML('Hollo World');

// html.insertAdjacentHTML('beforeend', text());

let a = document.getElementsByClassName('body');
let b = `<div>Sey Hi</div>`;

a.innerHTML = text();

function text() {
    return `<h1>Любимые напитки</h1>
    <form class="form">
        <input class="form__start" type="button" value="Добавить напиток">
        <div class="form__interes">
            <label for="nameDrink">Введите название напитка</label>
            <input type="text" name="nameDrink" id="nameDrink">
            <label for="type">Введите тип напитка</label>
            <input type="text" name="type" id="type">
            <div>
                <label for="alcoholic">Является ли ваш напиток алкагольным?</label>
                <div class="alcoholicTrue">
                    <label for="">Да:</label>
                    <input type="radio" name="alcoholic" id="alcoholicTrue">
                </div>
                <div>
                    <label for="">Нет:</label>
                    <input type="radio" name="alcoholic" id="alcoholicFalse">
                </div>
            </div>
            <textarea name="info" id="info" rows="10"></textarea>
            <input class="button__form"
                type="button"
                value="Сохранить информацию о напитке"
                size="50px">
        </div>    
    </form>`
};