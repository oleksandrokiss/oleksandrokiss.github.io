var i;
function pow(x, n) {
    var result = x;
    for (i=1; i<n; i++) {
        result *= x;
    }
    if(n===0) {
        return 1;
    } else {
        return result;
    }
}
var x = +prompt('Введите число','');
var n = +prompt('Введите желаемую степень','');
if(n<0) {
    console.log('Отрицательные степени не поддерживаются в этой версии');
} else {
    console.log(pow(x,n));
}