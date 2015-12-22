var i;
var ind;
var arr = [];
for (i=0; i<5; i++) {
    arr.push (prompt('Введите любое имя',''));
}
var name = prompt('Введите имя пользователя, пожалуйста!','');
for (i=0; i<arr.length; i++) {
    if(arr[i] == name) {
        ind = 1;
        break;
    } else {
        ind = 0;
    }
}
if(ind==1) {
    alert(name+', Вы успешно вошли!');
} else {
    alert('Error!');
}