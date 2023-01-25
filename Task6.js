let arr = [];
let check = 1;
let result = 1;

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
        if (string(arr[i]) != string(arr[k])) {
            result = check*0;
            break;
        } else {
            break;
        }
    }
}

console.log(Boolean(result));