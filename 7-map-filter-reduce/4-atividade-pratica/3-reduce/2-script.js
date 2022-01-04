const lista = [
    {
        nome: 'sabao em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    }
]

const saldoDisponivel = 100;

const saldoFinal = lista.reduce((acumulador, valorAtual) => {
    return acumulador - valorAtual.preco;
}, saldoDisponivel)

console.log(saldoFinal)


