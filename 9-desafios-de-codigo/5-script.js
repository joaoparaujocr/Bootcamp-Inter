const entradas = '1000000 1000';
const arrNum = entradas.split(' ').map( value => Number(value));

console.log(arrNum)
function perimeterCalculation(arr) {
    return arr[0] * arr[1];
}

console.log(perimeterCalculation(arrNum))