let enterText = prompt('Введите любые данные');
let result = +enterText;
let setType = typeof(result);
let typeOfNumber = result%2;
if (setType === 'number' ) {
    if (isNaN(result)) {
        console.log('Упс, кажется, вы ошиблись')
    } else if (result === 0) {
        console.log('Упс, кажется, вы ошиблись')
    } else {
        if (typeOfNumber === 0) {
            console.log('Число чётное')
        } else { 
            console.log('Число нечётное')  
        }
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}
