var year = +prompt('Введите год');

if (year % 4 === 0){
    alert('Это високосный год (366 дней)')
} else {
    alert('Это не високосный год (365 дней)')
}