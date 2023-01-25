let arr = [];
let even = 0;
let odd = 0;
let zero = 0;

for (i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number") {
        if ((arr[i]) != 0) {
            if ((isNaN(arr[i])) == false) {
                if (((arr[i])%2) === 0) {
                    even= even + 1;
                } else {
                    odd = odd + 1;
                }
            }
        } else {
            zero = zero + 1;
        }
    }
}

console.log(`Количество чётных чисел: ${even}; Количество нечётных чисел: ${odd}; Количество нулей: ${zero}.`)