// Armazenando uma função dentro de  uma variavel
const imprimiSoma = function (a, b) {
    console.log(a + b)
}

imprimiSoma(2,3)

// Armazenar uma função arrow (conceito novo) em uma variavel

const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

// retorno Implicito

const subtracao = (a , b) => a - b
console.log(subtracao(2,3))

const imprimi2 = a => console.log(a)
imprimi2('Dorinha')