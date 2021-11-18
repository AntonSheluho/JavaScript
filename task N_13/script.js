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

// $html.insertAdjacentHTML('beforeend', text());

// function text() {
//         
// };

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
    })
    formStart.classList.toggle('active');
    el.nameDrinkHtml.value = '';
    el.typeDrink.value = '';
    el.info.value = '';
    return false
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
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', `${acc}`);
    } else {
        infor.innerHTML = '';
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет')
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
        infor.insertAdjacentHTML('beforeend', 'Напитка с таким именнем у нас нет')
    }
};

infoAboutDrinksDeleteClos.onclick = function () {
    let infor = document.getElementById('infoAboutDrinks_delete__info');
    infoAboutDrinksDelete.classList.remove('activeDeleteDrink');
    infor.innerHTML = '';
}

//    Show keys All Elements

