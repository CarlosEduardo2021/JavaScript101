const soma = function (x, y) {  // função anonima nada mais é q uma função sem nome
    return x + y
}

const imprimirResultado = function ( a, b, operacao = soma) {
    console.log(operacao(a, b))
}
 imprimirResultado(3, 4,)
 imprimirResultado(3, 4, soma)
 imprimirResultado(3, 4, function(x, y){ //  Nesse caso foi passado uma função anonima dentro da função
     return x - y
})
imprimirResultado(3, 4, (x, y) =>  x * y)  // arrow function, atenção as virgulas

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()
