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
    'type': 'Пиво',
    'alcoholic': true,
    'info': 'Budweiser - легкий, ароматный, свежий лагер в американском стиле. Сварено из лучшего ячменного солода и смеси премиальных сортов хмеля.'
});

const $html = document.getElementById('html');
var nameDrinkHtml,
    typeDrink,
    alcoholic;

$html.insertAdjacentHTML('beforeend', text());

function text() {
    return `<h1>Любимые напитки</h1>
    <form class="form" onsubmit="return checkForm(this)">
        <input id="giveDrink" class="form__start" type="button" value="Добавить напиток">
        <div id="formStart" class="form__interes">
            <label for="nameDrinkHtml">Введите название напитка</label>
            <input type="text" name="nameDrinkHtml" autocomplete="off" id="nameDrinkHtml">
            <label for="type">Введите тип напитка</label>
            <input type="text" name="type" autocomplete="off" id="typeDrink">
            <div>
                <label for="alcoholic">Является ли ваш напиток алкагольным?</label>
                <div class="alcoholicTrue">
                    <label for="">Да:</label>
                    <input type="radio" name="alcoholic" id="alcoholicTrue" value="Алкогольный напиток">
                </div>
                <div>
                    <label for="">Нет:</label>
                    <input type="radio" name="alcoholic" id="alcoholicFalse" value="Безалкогольный напиток">
                </div>
            </div>
            <textarea autocomplete="off" name="info" id="info" rows="10"></textarea>
            <input id="saveInfo" class="button__form"
                type="submit"
                value="Сохранить информацию о напитке"
                size="50px">
        </div> 
        <div class="form_check">
            <input id="checkDrink" class="form__check" type="button" value="Получение информации о напитке"> 
            <input type="text" name="checkNameDrink" id="checkNameDrink" autocomplete="off" placeholder="Введите название напитка">
        </div>
        <div id="infoAboutDrinks" class="infoAboutDrinks">
            <div id="infoAboutDrinks__info" class="form__infoAboutDrinks"></div> 
            <input id="infoAboutDrinks__clos" class="form__infoAboutDrinks_clos" type="button" value="Ok">
        </div>
        <div class="form_check">
            <input id="deleteDrink" class="form__check" type="button" value="Удалить напиток"> 
            <input type="text" name="checkNameDrink" id="checkNameDrinkDelete" autocomplete="off" placeholder="Введите название напитка">
        </div>
        <div id="infoAboutDrinksDelete" class="infoAboutDrinks">
            <div id="infoAboutDrinks_delete__info" class="form__infoAboutDrinks"></div>
            <input id="infoAboutDrinks_delete__clos" class="form__infoAboutDrinks_clos" type="button" value="Ok">
        </div>
        <div class="form_check">
            <input id="show__all" class="form__check" type="button" value="Все наши напитки"> 
        </div>
        <div id="show__drinks" class="infoAboutDrinks">
            <div id="show__drinks__info" class="form__infoAboutDrinks"></div>
            <input id="show__drinks__clos" class="form__infoAboutDrinks_clos" type="button" value="Ok">
        </div>
    </form>`
};

//         Add  Element

const clickFormStart = document.getElementById('giveDrink');
const formStart = document.getElementById('formStart');

clickFormStart.onclick = function () {
    formStart.classList.toggle('active');
};

function checkForm(el) {
    
    nameDrinkHtml = el.nameDrinkHtml.value;
    typeDrink = el.typeDrink.value;
    alcoholic = el.alcoholic.value;
    info = el.info.value;

    drinkStorage.addValue(nameDrinkHtml, {
        'type': typeDrink,
        'alcoholic': alcoholic,
        'info': info
    });

    formStart.classList.toggle('active');
    el.nameDrinkHtml.value = '';
    el.typeDrink.value = '';
    el.info.value = '';

    return false;
}

//       Show Element

const checkDrink = document.getElementById('checkDrink');
const infoAboutDrinks = document.getElementById('infoAboutDrinks');
const infoAboutDrinksClos = document.getElementById('infoAboutDrinks__clos');

checkDrink.onclick = function () {

    infoAboutDrinks.classList.add('activeCheckDrink');

    let infor = document.getElementById('infoAboutDrinks__info');
    let checkName = document.getElementById('checkNameDrink').value;

    if (drinkStorage.getKeys().includes(checkName)) {
        let acc = drinkStorage.getValue(checkName).info;
        let accAlc;

        if (drinkStorage.getValue(checkName).alcoholic) {
            accAlc = 'Алкогольный';
        } else {
            accAlc = 'Безалкогольный';
        };

        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `напиток: ${checkName}<br>
        тип напитка: ${drinkStorage.getValue(checkName).type}<br>
        алкогольный: ${accAlc}<br>
        информация о напитке: ${drinkStorage.getValue(checkName).info}`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksClos.onclick = function () {

    let infor = document.getElementById('infoAboutDrinks__info');

    infoAboutDrinks.classList.remove('activeCheckDrink');
    infor.innerHTML = '';
}

//   Delete Element

const deleteDrink = document.getElementById('deleteDrink');
const infoAboutDrinksDelete = document.getElementById('infoAboutDrinksDelete');
const infoAboutDrinksDeleteClos = document.getElementById('infoAboutDrinks_delete__clos');

deleteDrink.onclick = function () {

    infoAboutDrinksDelete.classList.add('activeDeleteDrink');

    let infor = document.getElementById('infoAboutDrinks_delete__info');
    let checkName = document.getElementById('checkNameDrinkDelete').value;

    if (drinkStorage.getKeys().includes(checkName)) {
        drinkStorage.deleteValue(checkName);
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `Напиток удалён`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksDeleteClos.onclick = function () {

    let infor = document.getElementById('infoAboutDrinks_delete__info');
    
    infoAboutDrinksDelete.classList.remove('activeDeleteDrink');
    infor.innerHTML = '';
}

//    Show keys All Elements

const showAll = document.getElementById('show__all');
const showDrinks = document.getElementById('show__drinks');
const showDrinksClos = document.getElementById('show__drinks__clos');
const showDrinkInfo = document.getElementById('show__drinks__info');

showAll.onclick = function () {
    showDrinks.classList.add('activeShow');
    showDrinkInfo.insertAdjacentHTML('beforeend', `${drinkStorage.getKeys()}`);
}

showDrinksClos.onclick = function () {
    showDrinks.classList.remove('activeShow');
    showDrinkInfo.innerHTML = '';
}
