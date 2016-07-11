function name(add) {
    add.unshift(prompt('Введите имя'));
}

var add = [];

for (var i = 0; i < 5; i++) {
    name(add);
}

alert('Введенные имена ' + add.join('; '));

var userName = prompt('Ввести имя пользователя:');

    for (var n = 0; n < add.length; n++){
        if (userName == add[n]) {
            var comparison = true;
            alert (userName + ', вы успешно вошли');
            break;
        } else {
            var comparison = false;
        }
    }

if (comparison == false) {
    alert('ОШИБКА!');
}
