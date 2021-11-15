let testName = /^[а-яА-ЯёЁa-zA-Z.-]+$/,
    name = prompt('Введите ваше имя'),
    rezName = testName.test(name);
  
while (rezName == false || name == null) {
    name = prompt('Имя не корректно, введите ваше имя');
    rezName = testName.test(name);
};

let surname = prompt('Введите вашу фамилию'),
    rezSurname = testName.test(surname);

while (rezSurname == false || surname == null) {
    surname = prompt('Фамилия не корректна, введите вашу фамилию');
    rezSurname = testName.test(surname); 
};

let secondname = prompt('Введите ваше отчество'),
    rezSecondname = testName.test(secondname);

while (rezSecondname == false || secondname == null) {
    secondname = prompt('Отчество введено не корректно, введите ваше отчество');
    rezSecondname = testName.test(secondname); 
};

let age = +prompt('Введите ваш возраст'),
    testAge = /^[0-9]+$/,
    rezAge = testAge.test(age);

while (rezAge == false || age == 0) {
    age = +prompt('Возраст должен быть указан в арабских цифрах');
    rezAge = testAge.test(age);
};

let gender = confirm('Ваш пол - мужской?'),
    retiree;
    
if (gender) {
    gender = 'мужской';
} else {
    gender = 'женский';
};

if (age >= 65 && gender == 'мужской') {
    retiree = 'Да';
} else if ( age >= 55 && gender == 'женский') {
    retiree = 'Да';
} else if (age < 65 && gender == 'мужской') {
    retiree = 'Нет';
}  else if (age < 55 && gender == 'женский') {
    retiree = 'Нет';
};

alert(`Ваше ФИО: ${surname} ${name} ${secondname}\n
    Ваш возраст в годах: ${age}\n
    Ваш возраст в днях: ${age * 365}\n
    Через 5 лет вам будет: ${age + 5}\n
    Ваш пол: ${gender}\n
    Вы на пенсии: ${retiree}`);    