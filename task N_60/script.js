const body = document.getElementById('body');


/*
    fetch
*/


fetch('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json', {
    method: 'GET'
}).then(response => response.json())
.then(a => form(body, a))

fetch('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json', {
    method: 'GET'
}).then(response => response.json())
.then(a => form(body, a))


/*
    async / await
*/


async function getForm() {
    const response1 = await fetch('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json', {method: 'GET'});
    const resolve1 = await response1.json();
    form(body, resolve1);
    const response2 = await fetch('https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json', {method: 'GET'});
    const resolve2 = await response2.json();
    form(body, resolve2);
}
getForm()


/*
    XMLHttpRequest
*/


const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://fe.it-academy.by/Examples/dyn_form_ajax/formDef1.json', false);
xhr1.send()
form(body, JSON.parse(xhr1.response))

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://fe.it-academy.by/Examples/dyn_form_ajax/formDef2.json', false);
xhr2.send()
form(body, JSON.parse(xhr2.response))


/*
    function for building    
*/

function form(body, array) {
    const form = document.createElement('form');
    form.action = `https://fe.it-academy.by/TestForm.php`;
    form.style.cssText = `width: 80vw; margin: auto;`
    body.append(form)
    console.log(form)

    array.filter(item => {
        switch (item.kind) {
            case 'longtext':{createEl(form, item.name, item.label, `10vw`, `70vw`, 'text'); break}
            case 'number':{createEl(form, item.name, item.label, `10vw`, `5vw`, 'number'); break}
            case 'shorttext':{createEl(form, item.name, item.label, `10vw`, `10vw`, 'text'); break}
            case 'combo':{
                const div = document.createElement('div');
                div.style.display = `flex`;
                form.append(div);
                createForCombo(div, item);
                const select = document.createElement('select');
                select.name = item.name;
                select.style.width = `10vw`;
                div.append(select);
                item.variants.filter(el => {
                    const option = document.createElement('option');
                    option.textContent = el.text;
                    select.append(option);
                });
                break
            }
            case 'radio':{
                const div = document.createElement('div');
                div.style.display = `flex`;
                form.append(div);
                createForCombo(div, item);
                item.variants.filter(el => {
                    const div2 = document.createElement('div');
                    div2.style.width = `7vw`;
                    div.append(div2);
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = item.name;
                    div2.append(input);
                    const label = document.createElement('label');
                    label.textContent = el.text;
                    div2.append(label);
                });
                break
            }
            case 'check':{createEl(form, item.name, item.label, `10vw`, ``, 'checkbox'); break}
            case 'memo':{
                const div = document.createElement('div');
                div.style.display = `flex`;
                div.style.flexDirection = 'column';
                form.append(div);
                createForCombo(div, item)
                const textArea = document.createElement('textarea');
                textArea.name = item.name;
                div.append(textArea);
                break
            }
            case 'submit':{
                const input = document.createElement('input');
                input.type = 'submit';
                input.value = item.caption;
                form.append(input);
                break
            }
        }
    })
}

function createEl(form, name, value, sideLabel, sideInput, type) {
    const div = document.createElement('div');
    div.style.display = `flex`;
    const label = document.createElement('label');
    label.for = name;
    label.textContent = value;
    label.style.width = sideLabel;
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.style.width = sideInput;
    form.append(div);
    div.append(label);
    div.append(input);
}

function createForCombo(div, item) {
    const label = document.createElement('label')
    label.for = item.name;
    label.value = item.label;
    label.style.width = `10vw`;
    div.append(label);
}

