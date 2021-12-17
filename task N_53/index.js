class DrinkLocalStorage {
    constructor() {

    }

    addValue(key,value) {
        this[key] = value;
    }

    getValue(key) {
        console.log(this[key])
        return this[key];
    }

    deleteValue(key) {
        let acc = 0;
        for (let k in this) {
            if (key == Object.keys(this)[acc]) {
                delete this[k]
                console.log(true);
                return true
            }
            acc++
        }
        console.log(false);
        return false
    }

    getKeys() {
        let acc = [];
        for (let k in this) {
            acc[acc.length] = k;
        }
        console.log(acc)
        return acc;
    }
}

// const drinkStorage = new DrinkLocalStorage();
// const body = document.getElementById('body');
// const h1 = document.createElement('h1');
// const form = document.createElement('form');
// form.onsubmit = () => checkForm(this);
// form.style.cssText = `display: flex;
//                     flex-direction: column;
//                     row-gap: 20px;`;
// const addDrink = document.createElement('input');
// addDrink.type = `button`;
// addDrink.value = `Добавить напиток`;
// addDrink.style.cssText = `height: 30px;
//                         width: 200px;`;
// const formStart = document.createElement('div');
// formStart.style.cssText = `display: none;
//                         flex-direction: column;
//                         width: 40vw;
//                         row-gap: 20px;`;
// const labelNameDrink = document.createElement('label');
// labelNameDrink.for = 'enterNameDrink';
// labelNameDrink.value = `Введите название напитка`;
// const enterNameDrink = document.createElement('input');
// enterNameDrink.type = `text`;
// enterNameDrink.name = `enterNameDrink`;
// enterNameDrink.autocomplete = `off`;
// const labelTypeDrink = document.createElement('label');
// labelTypeDrink.for = `enterTypeDrink`;
// labelTypeDrink.value = `Введите тип напитка`;
// const enterTypeDrink = document.createElement('input');
// enterTypeDrink.type = 'text';
// enterTypeDrink.autocomplete = 'off';
// enterTypeDrink.name = 'enterTypeDrink';

//     Решил сэкономить время и продолжил так ;

const body = document.getElementById('body');
body.insertAdjacentHTML('beforeend', text());

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

