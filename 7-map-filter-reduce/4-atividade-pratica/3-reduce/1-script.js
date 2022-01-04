const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16];
const reduceResult = myArray.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})

console.log(reduceResult)