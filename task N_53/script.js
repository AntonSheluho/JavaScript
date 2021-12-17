class HashStorageClass {

    constructor() {
    }

    addValue(key,value) {
        let acc = {[key]: value}; 
        localStorage.setItem(`${key}`, JSON.stringify(acc));
        let accStor;
        if (localStorage.getItem('drinks') != undefined) {
            accStor = JSON.parse(localStorage.getItem('drinks'));
            accStor.push(key);
            localStorage.setItem(`drinks`, JSON.stringify(accStor))
        } else {
            localStorage.setItem(`drinks`, JSON.stringify([key]));
        }
    }

    getValue(key) {
        
        let acc = JSON.parse(localStorage.getItem('drinks'));
        for (let el of acc) {
            if (key == el){
                let acc2 = JSON.parse(localStorage.getItem(`${key}`))
                return acc2
            }
        }
        return 
    }

    deleteValue(key) {
        let acc = JSON.parse(localStorage.getItem('drinks'));
        for (let el of acc) {
            if (el == key) {
                let ind = acc.findIndex(item => item == el);
                acc.splice(ind, 1);
                localStorage.setItem(`drinks`, JSON.stringify(acc))
                localStorage.removeItem(`${key}`)
                return true
            }
        }
        return false
    }

    getKeys() {
        let acc = JSON.parse(localStorage.getItem('drinks'));
        return acc;
    }
}


const body = document.getElementById('body');
body.insertAdjacentHTML('beforeend', text());
const clickFormStart = document.getElementById('giveDrink');
const formStart = document.getElementById('formStart');
const checkDrink = document.getElementById('checkDrink');
const infoAboutDrinks = document.getElementById('infoAboutDrinks');
const infoAboutDrinksClos = document.getElementById('infoAboutDrinks__clos');
const infor = document.getElementById('infoAboutDrinks__info');
const deleteDrink = document.getElementById('deleteDrink');
const infoAboutDrinksDelete = document.getElementById('infoAboutDrinksDelete');
const infoAboutDrinksDeleteClos = document.getElementById('infoAboutDrinks_delete__clos');
const showAll = document.getElementById('show__all');
const showDrinks = document.getElementById('show__drinks');
const showDrinksClos = document.getElementById('show__drinks__clos');
const showDrinkInfo = document.getElementById('show__drinks__info');


//         Add  Element


clickFormStart.onclick = function () {
    formStart.classList.add('active');
};

function checkForm(el) {
    if (el.nameDrinkHtml.value != '') {
        let nameDrinkHtml = el.nameDrinkHtml.value;
        let typeDrink = el.typeDrink.value;
        let alcoholic = el.alcoholic.value;
        let info = el.info.value;

        let drinkStorage = new HashStorageClass();

        drinkStorage.addValue(nameDrinkHtml, {
            'type': typeDrink,
            'alcoholic': alcoholic,
            'info': info
        });
        console.log(localStorage.getItem(`${nameDrinkHtml}`))
        
    }


    formStart.classList.remove('active');
    el.nameDrinkHtml.value = '';
    el.typeDrink.value = '';
    el.info.value = '';

    return false;
}


//       Show Element


checkDrink.onclick = function () {

    infoAboutDrinks.classList.add('active');

    
    let checkName = document.getElementById('checkNameDrink').value;
    let drinks = new HashStorageClass();

    if (drinks.getKeys().includes(checkName)) {
        let accAlc;
        if (drinks.getValue(checkName)[checkName].alcoholic === 'true') {
            accAlc = 'Да';
        } else {
            accAlc = 'Нет';
        };

        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `Напиток: ${checkName}<br>
        Тип напитка: ${drinks.getValue(checkName)[checkName].type}<br>
        Алкогольный: ${accAlc}<br>
        Информация о напитке: ${drinks.getValue(checkName)[checkName].info}`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksClos.onclick = function () {
    infoAboutDrinks.classList.remove('active');
    infor.innerHTML = '';
}


//   Delete Element


deleteDrink.onclick = function () {

    let infor = document.getElementById('infoAboutDrinks_delete__info');
    let checkName = document.getElementById('checkNameDrinkDelete').value;
    let drinks = new HashStorageClass();

    if (drinks.getKeys().includes(checkName)) {
        drinks.deleteValue(checkName);
        alert(`Напиток удалён`);
    } else {
        alert('Напитка с таким именнем у нас нет');
    }
};


//    Show keys All Elements


showAll.onclick = function () {
    showDrinks.classList.add('active');
    let drinks = new HashStorageClass();
    if (localStorage.getItem('drinks') != undefined) {
        showDrinkInfo.innerHTML = `${drinks.getKeys()}`;
    } else if (drinks.getKeys() == undefined) {
        showDrinkInfo.innerHTML = 'Пусто';
    }
}

showDrinksClos.onclick = function () {
    showDrinks.classList.remove('active');
    showDrinkInfo.innerHTML = '';
}

//----------------------------------------------------------------------------------------------------------------------------------------------

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