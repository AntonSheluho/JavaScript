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

