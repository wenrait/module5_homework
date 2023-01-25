let x
type = typeof(x);
if (type === 'number') {
    console.log('x - число')
} else if (type === 'string') {
    console.log('x - строка')
} else if (type === 'boolean') {
    console.log('x принадлежит логическому типу')
} else {
    console.log('Тип x не определен')
}