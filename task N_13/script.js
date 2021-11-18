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

    self.deleteValue('undefined');
}

const drinkStorage = new HashStorageFunc()

const $html = document.getElementById('html');
var nameDrinkHtml,
    typeDrink,
    alcoholic,
    info;

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
                    <input type="radio" name="alcoholic" id="alcoholicTrue" value="true">
                </div>
                <div>
                    <label for="">Нет:</label>
                    <input type="radio" name="alcoholic" id="alcoholicFalse" value="false">
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
            <input id="infoAboutDrinks__clos" class="form__infoAboutDrinks_clos" type="button" value="Закрыть">
        </div>
        <div class="form_check">
            <input id="deleteDrink" class="form__check" type="button" value="Удалить напиток"> 
            <input type="text" name="checkNameDrink" id="checkNameDrinkDelete" autocomplete="off" placeholder="Введите название напитка">
        </div>
        <div class="form_check">
            <input id="show__all" class="form__check" type="button" value="Все наши напитки"> 
        </div>
        <div id="show__drinks" class="infoAboutDrinks">
            <div id="show__drinks__info" class="form__infoAboutDrinks">Пусто</div>
            <input id="show__drinks__clos" class="form__infoAboutDrinks_clos" type="button" value="Закрыть">
        </div>
    </form>`
};

//         Add  Element

const clickFormStart = document.getElementById('giveDrink');
const formStart = document.getElementById('formStart');

clickFormStart.onclick = function () {
    formStart.classList.add('active');
};

function checkForm(el) {
    if (el.nameDrinkHtml.value != '') {
        nameDrinkHtml = el.nameDrinkHtml.value;
        typeDrink = el.typeDrink.value;
        alcoholic = el.alcoholic.value;
        info = el.info.value;

        drinkStorage.addValue(nameDrinkHtml, {
            'type': typeDrink,
            'alcoholic': alcoholic,
            'info': info
        });
    }


    formStart.classList.remove('active');
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

    infoAboutDrinks.classList.add('active');

    let infor = document.getElementById('infoAboutDrinks__info');
    let checkName = document.getElementById('checkNameDrink').value;

    if (drinkStorage.getKeys().includes(checkName)) {
        let accAlc;

        if (drinkStorage.getValue(checkName).alcoholic == true) {
            accAlc = 'Да';
        } else {
            accAlc = 'Нет';
        };

        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `Напиток: ${checkName}<br>
        Тип напитка: ${drinkStorage.getValue(checkName).type}<br>
        Алкогольный: ${accAlc}<br>
        Информация о напитке: ${drinkStorage.getValue(checkName).info}`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksClos.onclick = function () {

    let infor = document.getElementById('infoAboutDrinks__info');

    infoAboutDrinks.classList.remove('active');
    infor.innerHTML = '';
}

//   Delete Element

const deleteDrink = document.getElementById('deleteDrink');
const infoAboutDrinksDelete = document.getElementById('infoAboutDrinksDelete');
const infoAboutDrinksDeleteClos = document.getElementById('infoAboutDrinks_delete__clos');

deleteDrink.onclick = function () {

    let infor = document.getElementById('infoAboutDrinks_delete__info');
    let checkName = document.getElementById('checkNameDrinkDelete').value;

    if (drinkStorage.getKeys().includes(checkName)) {
        drinkStorage.deleteValue(checkName);
        alert(`Напиток удалён`);
    } else {
        alert('Напитка с таким именнем у нас нет');
    }
};

//    Show keys All Elements

const showAll = document.getElementById('show__all');
const showDrinks = document.getElementById('show__drinks');
const showDrinksClos = document.getElementById('show__drinks__clos');
const showDrinkInfo = document.getElementById('show__drinks__info');

showAll.onclick = function () {
    showDrinks.classList.add('active');
    console.log(showDrinkInfo)
    if (drinkStorage.getKeys().length != 0) {
        showDrinkInfo.innerHTML = '';
        showDrinkInfo.insertAdjacentHTML('beforeend', `${drinkStorage.getKeys()}`);
    } else if (drinkStorage.getKeys()[0] == undefined && drinkStorage.getKeys().length == 0) {
        showDrinkInfo.innerHTML = 'Пусто';
    }
}

showDrinksClos.onclick = function () {
    showDrinks.classList.remove('active');
    showDrinkInfo.innerHTML = '';
}
