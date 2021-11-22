var formDef1=
[
 {label:'Название сайта:',kind:'longtext',name:'sitename'},
 {label:'URL сайта:',kind:'longtext',name:'siteurl'},
 {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
 {label:'E-mail для связи:',kind:'shorttext',name:'email'},
 {label:'Рубрика каталога:',kind:'combo',name:'division',
 variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
 {label:'Размещение:',kind:'radio',name:'payment',
 variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
 {label:'Разрешить отзывы:',kind:'check',name:'votes'},
 {label:'Описание сайта:',kind:'memo',name:'description'},
 {caption:'Опубликовать',kind:'submit'},
];
var formDef2=
[
 {label:'Фамилия:',kind:'longtext',name:'lastname'},
 {label:'Имя:',kind:'longtext',name:'firstname'},
 {label:'Отчество:',kind:'longtext',name:'secondname'},
 {label:'Возраст:',kind:'number',name:'age'},
 {caption:'Зарегистрироваться',kind:'submit'},
];

const $tag = document.getElementById('hi');

function form(tag, array) {
    let link = `<form action="https://fe.it-academy.by/TestForm.php" style="width: 80vw; margin: 0, auto;">`;
    
    for (let i of array) {
        if (i.kind === 'longtext') {
            link += `<div style="display: flex;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <input style="width: 70vw;" type="text" name="${i.name}">
                    </div>`;
        } else if (i.kind === 'number') {
            link += `<div style="display: flex;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <input style="width: 5vw;" type="number" name="${i.name}">
                    </div>`;
        } else if (i.kind === 'shorttext') {
            link += `<div style="display: flex;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <input style="width: 10vw;" type="text" name="${i.name}">
                    </div>`;
        } else if (i.kind === 'combo') {
            link += `<div style="display: flex;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <select style="width: 10vw;" name="${i.name}">`;
            for (let j = 0; j < i.variants.length; j++) {
                link += `<option>${i.variants[j].text}</option>`;
            }
            
            link += `</select></div>`;
        } else if (i.kind === 'radio') {
            link += `<div style="display: flex;"><label style="width: 10vw;" for="${i.name}">${i.label}</label>`;

            for (let j = 0; j < i.variants.length; j++) {
                link += `<div style="width: 7vw;">
                            <input type="radio" name="${i.name}">
                            <label>${i.variants[j].text}</label>
                        </div>`;
            }
                        
            link += `</div>`;
        } else if (i.kind === 'check') {
            link += `<div style="display: flex;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <input type="checkbox" name="${i.name}">
                    </div>`;
        } else if (i.kind === 'memo') {
            link += `<div style="display: flex; flex-direction: column;">
                        <label style="width: 10vw;" for="${i.name}">${i.label}</label>
                        <textarea name="${i.name}"></textarea>
                    </div>`;
        } else if (i.kind === 'submit') {
            link += `<input type="submit" value="${i.caption}">`;
        }
    }

    link += `</form>`;
    tag.insertAdjacentHTML('beforeend', link);
}

form($tag, formDef1);
form($tag, formDef2);