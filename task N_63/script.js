class AJAXStorage {
    constructor() {

    }

    addValue(key,value) {
        this[key] = value;
        const response = fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: {
                drinkName: key,
                drinkInfo: value
            }
        }).then(a => console.log(a)).catch(a => console.log(a));
    }

    async getValue(key) {
        console.log(this[key])
        if (this[key] != undefined) {
            return this.key
        } else {
            console.log(`else`)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: 'GET',
            });
            const resolve = await response.json();
            let rez; 
            resolve.filter(el => {if (el[key] == key) {rez = el}})
            console.log(rez);
            return rez
        }
    }

    async deleteValue(key) {
        if (this[key] != undefined) {
            delete this[key]
            console.log(true);
            const response = fetch(`https://jsonplaceholder.typicode.com/users`,{
                method: 'DELETE',
                body: key
            })
            return true
        } else {
            let acc = false;
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
                method: 'GET',
            })
            const resolve = await response.json()
            const a = a.filter(el => {
                    if (el[key] != undefined) {
                        acc = true;
                        console.log(acc);
                        return true
                    } 
                }) 
            
            if (acc) {
                const response = fetch(`https://jsonplaceholder.typicode.com/users`,{
                    method: 'DELETE',
                    body: key
                })
            }
            console.log(acc);
            return acc
        }
    }

    async getKeys() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`,{
            method: 'GET',
        })
        const resolve = await response.json()
        const acc = resolve.filter(el => {
            if (el.drinkName !== undefined) {
                return el.drinkName
            }
        })
        return acc;
    }
}

const drinkStorage = new AJAXStorage()

const $html = document.getElementById('html');
var nameDrinkHtml,
    typeDrink,
    alcoholic,
    info;

$html.insertAdjacentHTML('beforeend', text());
const clickFormStart = document.getElementById('giveDrink');
const formStart = document.getElementById('formStart');
const checkDrink = document.getElementById('checkDrink');
const infoAboutDrinks = document.getElementById('infoAboutDrinks');
const infoAboutDrinksClos = document.getElementById('infoAboutDrinks__clos');
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
        drinkStorage.addValue(el.nameDrinkHtml.value, {
            'type': el.typeDrink.value,
            'alcoholic': el.alcoholic.value,
            'info': el.info.value
        });
    }
    
    formStart.classList.remove('active');
    el.nameDrinkHtml.value = '';
    el.typeDrink.value = '';
    el.info.value = '';
    
    return false;
}


//       Show Element


checkDrink.onclick = function () {
    
    
    
    let infor = document.getElementById('infoAboutDrinks__info');
    let checkName = document.getElementById('checkNameDrink').value;
    
    if (drinkStorage.getKeys().includes(checkName)) {
        infoAboutDrinks.classList.add('active');
        let accAlc;
        
        if (drinkStorage.getValue(checkName)['alcoholic'] == 'true') {
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
        alert('Напитка с таким именнем у нас нет');
    }
};

infoAboutDrinksClos.onclick = function () {
    
    let infor = document.getElementById('infoAboutDrinks__info');
    
    infoAboutDrinks.classList.remove('active');
    infor.innerHTML = '';
}


//   Delete Element


deleteDrink.onclick = function () {
    let checkName = document.getElementById('checkNameDrinkDelete').value;
    if (drinkStorage.deleteValue(checkName)) {
        alert(`Напиток удалён`)
        return
    } 
    alert('Напитка с таким именнем у нас нет');
};


//    Show keys All Elements


showAll.onclick = function () {
    if (Object.keys(drinkStorage).length == 0) {
        const p = new Promise((res, rej) => {
            res(drinkStorage.getKeys());        
        })
        .then(resolve => {
            console.log(resolve)
            if (resolve.length != 0) {
                showDrinks.classList.add('active');
                showDrinkInfo.innerHTML = '';
                showDrinkInfo.insertAdjacentHTML('beforeend', `${resolve}`);
            } else if (resolve[0] == undefined && resolve.length == 0) {
                alert('Список пуст');
            }
        })
    } else if (Object.keys(drinkStorage).length !== 0) {
        const p = new Promise((res, rej) => {
            res(drinkStorage.getKeys());        
        }).then(resolve => {
            console.log(resolve)
            if (resolve.length != 0) {
                showDrinks.classList.add('active');
                showDrinkInfo.innerHTML = '';
                showDrinkInfo.insertAdjacentHTML('beforeend', `${resolve}`);
            }   
        })
    }
}




    // if (drinkStorage.getKeys().length != 0) {
    //     showDrinks.classList.add('active');
    //     showDrinkInfo.innerHTML = '';
    //     showDrinkInfo.insertAdjacentHTML('beforeend', `${drinkStorage.getKeys()}`);
    // } else if (drinkStorage.getKeys()[0] == undefined && drinkStorage.getKeys().length == 0) {
    //     alert('Список пуст');
    // }

showDrinksClos.onclick = function () {
    showDrinks.classList.remove('active');
    showDrinkInfo.innerHTML = '';
}


// function for building


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
}