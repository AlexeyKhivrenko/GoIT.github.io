function name(add) {
    add.unshift(prompt('Введите имя'));
}

var add = [];

for (var i = 0; i < 5; i++) {
    name(add);
}

console.log(add);

var userName = prompt('ввести имя пользователя:');

    for (var i = 0; i < add.length; i++) {

    if (userName == add[i]) {
        console.log(userName + ' вы удачно вошли');
        break;
    } else {
    console.log('Попробуйте еще раз!');
    }

}
