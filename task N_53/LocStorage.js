class LocalStorageClass {

    constructor() {
    }

    addValue(key, value, type) {
        let acc = {[key]: value}; 
        localStorage.setItem(`${key}`, JSON.stringify(acc));
        let accStor;
        if (localStorage.getItem(`${type}`) != undefined) {
            accStor = JSON.parse(localStorage.getItem(`${type}`));
            accStor.push(key);
            localStorage.setItem(`${type}`, JSON.stringify(accStor))
        } else {
            localStorage.setItem(`${type}`, JSON.stringify([key]));
        }
    }

    getValue(key, type) {
        
        let acc = JSON.parse(localStorage.getItem(`${type}`));
        for (let el of acc) {
            if (key == el){
                let acc2 = JSON.parse(localStorage.getItem(`${key}`))
                return acc2
            }
        }
        return 
    }

    deleteValue(key, type) {
        let acc = JSON.parse(localStorage.getItem(`${type}`));
        for (let el of acc) {
            if (el == key) {
                let ind = acc.findIndex(item => item == el);
                acc.splice(ind, 1);
                localStorage.setItem(`${type}`, JSON.stringify(acc))
                localStorage.removeItem(`${key}`)
                return true
            }
        }
        return false
    }

    getKeys(type) {
        let acc = JSON.parse(localStorage.getItem(`${type}`));
        return acc;
    }
}

const drinks = new LocalStorageClass();
const food = new LocalStorageClass();


const body = document.getElementById('body');
body.insertAdjacentHTML('beforeend', text());
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
form1.style.display = `none`;
form2.style.display = `none`;

//                               For drinks

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

//                                For food

const clickFormStart2 = document.getElementById('giveDrink2');
const formStart2 = document.getElementById('formStart2');
const checkDrink2 = document.getElementById('checkDrink2');
const infoAboutDrinks2 = document.getElementById('infoAboutDrinks2');
const infoAboutDrinksClos2 = document.getElementById('infoAboutDrinks__clos2');
const infor2 = document.getElementById('infoAboutDrinks__info2');
const deleteDrink2 = document.getElementById('deleteDrink2');
const infoAboutDrinksDelete2 = document.getElementById('infoAboutDrinksDelete2');
const infoAboutDrinksDeleteClos2 = document.getElementById('infoAboutDrinks_delete__clos2');
const showAll2 = document.getElementById('show__all2');
const showDrinks2 = document.getElementById('show__drinks2');
const showDrinksClos2 = document.getElementById('show__drinks__clos2');
const showDrinkInfo2 = document.getElementById('show__drinks__info2');
const drinksButt = document.getElementById('drinks_butt');
const foodButt = document.getElementById('food_butt');

//                             Buttons for opening forms

drinksButt.onclick = () => {
    form1.style.cssText = `display:block`;
    form2.style.cssText = `display: none`;
}
foodButt.onclick = () => {
    form1.style.cssText = `display: none`;
    form2.style.cssText = `display:block`;
}


//                                Add  Element

/*
    drinks
*/

clickFormStart.onclick = function () {
    formStart.classList.add('active');
};

function checkForm(el) {
    if (el.nameDrinkHtml.value != '') {
        let nameDrinkHtml = el.nameDrinkHtml.value;
        let typeDrink = el.typeDrink.value;
        let alcoholic = el.alcoholic.value;
        let info = el.info.value;

        drinks.addValue(nameDrinkHtml, {
            'type': typeDrink,
            'alcoholic': alcoholic,
            'info': info
        }, 'drinks');
        console.log(localStorage.getItem(`${nameDrinkHtml}`))
        
    }


    formStart.classList.remove('active');
    el.nameDrinkHtml.value = '';
    el.typeDrink.value = '';
    el.info.value = '';

    return false;
}

clickFormStart.onclick = function () {
    formStart.classList.add('active');
};

/*
    food
*/

clickFormStart2.onclick = function () {
    formStart2.classList.add('active');
};

function checkForm2(el) {
    if (el.nameDrinkHtml2.value != '') {
        let nameDrinkHtml = el.nameDrinkHtml2.value;
        let typeDrink = el.typeDrink2.value;
        let info = el.info2.value;

        food.addValue(nameDrinkHtml, {
            'type': typeDrink,
            'info': info
        }, 'food');
        console.log(localStorage.getItem(`${nameDrinkHtml}`))
    }


    formStart2.classList.remove('active');
    el.nameDrinkHtml2.value = '';
    el.typeDrink2.value = '';
    el.info2.value = '';

    return false;
}

clickFormStart2.onclick = function () {
    formStart2.classList.add('active');
};


//                                     Show Element


/*
    drinks
*/

checkDrink.onclick = function () {
    let checkName = document.getElementById('checkNameDrink').value;
    infoAboutDrinks.classList.add('active');

    if (drinks.getKeys('drinks').includes(checkName)) {
        let accAlc;
        if (drinks.getValue(checkName, 'drinks')[checkName].alcoholic === 'true') {
            accAlc = 'Да';
        } else {
            accAlc = 'Нет';
        };

        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `Напиток: ${checkName}<br>
        Тип напитка: ${drinks.getValue(checkName, 'drinks')[checkName].type}<br>
        Алкогольный: ${accAlc}<br>
        Информация о напитке: ${drinks.getValue(checkName, 'drinks')[checkName].info}`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksClos.onclick = function () {
    infoAboutDrinks.classList.remove('active');
    infor.innerHTML = '';
}

/*
    food
*/

checkDrink2.onclick = function () {
    let checkName = document.getElementById('checkNameDrink2').value;
    infoAboutDrinks2.classList.add('active');

    if (food.getKeys('food').includes(checkName)) {
        infor2.innerHTML = '';
        infor2.insertAdjacentHTML('beforeend', `Блюдо: ${checkName}<br>
        Тип блюда: ${food.getValue(checkName, 'food')[checkName].type}<br>
        Информация о блюде: ${food.getValue(checkName, 'food')[checkName].info}`);
    } else {
        infor2.innerHTML = '';
        infor2.insertAdjacentHTML('beforeend', 'Блюда с таким именнем у нас нет');
    }
};

infoAboutDrinksClos2.onclick = function () {
    infoAboutDrinks2.classList.remove('active');
    infor2.innerHTML = '';
}


//                                  Delete Element


/*
    drinks
*/

deleteDrink.onclick = function () {
    let checkName = document.getElementById('checkNameDrinkDelete').value;

    if (drinks.getKeys('drinks').includes(checkName)) {
        drinks.deleteValue(checkName, 'drinks');
        alert(`Напиток удалён`);
    } else {
        alert('Напитка с таким именнем у нас нет');
    }
};

/*
    food
*/

deleteDrink2.onclick = function () {
    let checkName = document.getElementById('checkNameDrinkDelete2').value;

    if (food.getKeys('food').includes(checkName)) {
        food.deleteValue(checkName, 'food');
        alert(`Блюдо удалёно`);
    } else {
        alert('Блюда с таким именнем у нас нет');
    }
};


//                              Show keys All Elements


/*
    drinks
*/

showAll.onclick = function () {
    showDrinks.classList.add('active');
    if (localStorage.getItem('drinks') != undefined) {
        showDrinkInfo.innerHTML = `${drinks.getKeys('drinks')}`;
    } else if (drinks.getKeys('drinks') == undefined) {
        showDrinkInfo.innerHTML = 'Пусто';
    }
}

showDrinksClos.onclick = function () {
    showDrinks.classList.remove('active');
    showDrinkInfo.innerHTML = '';
}

/*
    food
*/

showAll2.onclick = function () {
    showDrinks2.classList.add('active');
    if (localStorage.getItem('food') != undefined) {
        showDrinkInfo2.innerHTML = `${food.getKeys('food')}`;
    } else if (food.getKeys('food') == undefined) {
        showDrinkInfo2.innerHTML = 'Пусто';
    }
}

showDrinksClos2.onclick = function () {
    showDrinks2.classList.remove('active');
    showDrinkInfo2.innerHTML = '';
}

//----------------------------------------------------------------------------------------------------------------------------------------------

function text() {
    return `<h1>Любимые напитки и блюда</h1>
    <form>
        <input id="drinks_butt" type="button" value="Напитки">
        <input id="food_butt" type="button" value="Блюда">
    </form>
    <form id="form1" class="form1" onsubmit="return checkForm(this)">
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
    </form>
    <form id="form2" class="form2" onsubmit="return checkForm2(this)">
        <input id="giveDrink2" class="form__start2" type="button" value="Добавить блюдо">
        <div id="formStart2" class="form__interes2">
            <label for="nameDrinkHtml2">Введите название блюда</label>
            <input type="text" name="nameDrinkHtml2" autocomplete="off" id="nameDrinkHtml2">
            <label for="type2">Введите тип блюда</label>
            <input type="text" name="type2" autocomplete="off" id="typeDrink2">
            <textarea autocomplete="off" name="info2" id="info2" rows="10"></textarea>
            <input id="saveInfo2" class="button__form2"
                type="submit"
                value="Сохранить информацию о блюде"
                size="50px">
        </div> 
        <div class="form_check2">
            <input id="checkDrink2" class="form__check2" type="button" value="Получение информации о блюде"> 
            <input type="text" name="checkNameDrink2" id="checkNameDrink2" autocomplete="off" placeholder="Введите название блюда">
        </div>
        <div id="infoAboutDrinks2" class="infoAboutDrinks2">
            <div id="infoAboutDrinks__info2" class="form__infoAboutDrinks2"></div> 
            <input id="infoAboutDrinks__clos2" class="form__infoAboutDrinks_clos2" type="button" value="Закрыть">
        </div>
        <div class="form_check2">
            <input id="deleteDrink2" class="form__check2" type="button" value="Удалить блюдо"> 
            <input type="text" name="checkNameDrink2" id="checkNameDrinkDelete2" autocomplete="off" placeholder="Введите название блюда">
        </div>
        <div class="form_check2">
            <input id="show__all2" class="form__check2" type="button" value="Все наши блюда"> 
        </div>
        <div id="show__drinks2" class="infoAboutDrinks2">
            <div id="show__drinks__info2" class="form__infoAboutDrinks2">Пусто</div>
            <input id="show__drinks__clos2" class="form__infoAboutDrinks_clos2" type="button" value="Закрыть">
        </div>
    </form>`
};


