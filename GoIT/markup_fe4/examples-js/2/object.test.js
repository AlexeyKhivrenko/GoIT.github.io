var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};
var abc = {};
for (var key in menu) {
  // этот код будет вызван для каждого свойства объекта
  // ..и выведет имя свойства и его значение
  abc = { key : menu[key]};
  console.log(abc);
}
