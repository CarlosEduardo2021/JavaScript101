// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: "Rua ABC",
            mumero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idede: 19,

    }, {
        nome:'Ana',
        idade: 42,

    }],
    calcularValorSeguro: function() {
        /// ...
    }

}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'Av. Givante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)  // meswmo condutores estando deletedo, ele voltou quando foi chamado, mas como undefined
// console.log(carro.condutores.length) // nesse caso vai dar erro, por que para acessar a função 'length' não esta definida
