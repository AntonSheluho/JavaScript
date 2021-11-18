function text() {
    return `<h1>Любимые напитки</h1>
    <form class="form">
        <input class="form__start" type="button" value="Добавить напиток">
        <div class="form__interes">
            <label for="nameDrink">Введите название напитка</label>
            <input type="text" name="nameDrink" id="nameDrink">
            <label for="type">Введите тип напитка</label>
            <input type="text" name="type" id="type">
            <div>
                <label for="alcoholic">Является ли ваш напиток алкагольным?</label>
                <div class="alcoholicTrue">
                    <label for="">Да:</label>
                    <input type="radio" name="alcoholic" id="alcoholicTrue">
                </div>
                <div>
                    <label for="">Нет:</label>
                    <input type="radio" name="alcoholic" id="alcoholicFalse">
                </div>
            </div>
            <textarea name="info" id="info" rows="10"></textarea>
            <input class="button__form"
                type="button"
                value="Сохранить информацию о напитке"
                size="50px">
        </div>    
    </form>`
    
};