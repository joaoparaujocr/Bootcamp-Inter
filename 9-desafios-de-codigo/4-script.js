let numbers = '2 4 3 2';
let arrNum = numbers.split(' ').map(value => Number(value))
console.log(arrNum)

const resultado = numberOfDevices(arrNum);
console.log(resultado);

function numberOfDevices(arr) {
    let totalNumber = 0;
    for(let i in arr) {
        if (arr[i] >= 2 && arr[i] <= 6 && i != arr.length - 1) {
            totalNumber += (arr[i] - 1);
            continue;
        }
        totalNumber += arr[i];
    }
    return totalNumber;
}