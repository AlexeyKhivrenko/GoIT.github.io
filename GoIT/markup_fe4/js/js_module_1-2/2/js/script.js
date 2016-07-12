function name( add ) { //

    var inputName = prompt('Введите имя');

    if ( inputName == '' ) {
        alert('Заполните поле');
        return name( add );
    } else {
        add.unshift(inputName); //добавляет в конец массива элеент
    }
}

var add = [];

for (var i = 0; i < 5; i++) {
    name( add ); //выводит функцию
}

alert( 'Введенные имена ' + add.join('; ') );

function outputName() {

    var userName = prompt('Ввести имя пользователя:');
    var comprasion = '';

        for (var n = 0; n < add.length; n++) {

            if ( userName == '' ) {
                alert('Вы не ввели имя!')
                return outputName();
            } else if ( userName == add[n] ) {
                comparison = true;
                alert ( userName + ', вы успешно вошли!' );
                break;
            } else {
                comparison = false;
            }
        }

    if ( comparison == false ) {
        alert('ОШИБКА!');
    }
}

outputName();
