var askDate = +prompt('Введите год')

if (askDate % 100 !== 0 && askDate % 4 === 0){
    alert('Это високосный год')
} else if (askDate % 100 === 0 && askDate % 400 === 0){
    alert('Это високосный год')
} else {
    alert('Это не високосный год')
}