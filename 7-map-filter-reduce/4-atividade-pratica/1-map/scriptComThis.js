const maca = {
    price: 2
}

const melancia = {
    price: 5.2,
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

const mapArray = myArray.map(function(item) {
    return item * this.price
}, maca);

console.log(mapArray)