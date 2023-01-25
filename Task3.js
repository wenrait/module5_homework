let string = prompt('Введите, что хотите :)');

function reverseString(string) {
    let arrayOld = string.split('');
    let reversedArray = arrayOld.reverse();
    let arrayNew = reversedArray.join('');
    return arrayNew;
}

console.log(reverseString(string));