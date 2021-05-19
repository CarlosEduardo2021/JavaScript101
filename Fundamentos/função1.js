//Função sem retorno
function imprimirSoma (a, b){
    console.log(a + b)

}
imprimirSoma (2 , 3)
imprimirSoma(2)
imprimirSoma (2, 10, 4, 5, 6, 7, 8,)
imprimirSoma()


// Função com retorno

function soma (a, b = 1) // no caso estou dizendo q por padrão b = 1
 {   return a + b
}
console.log(soma(2,3))
console.log(soma(2)) // no caso o resultado é 3, pq b esta definido como 1
console.log(soma())