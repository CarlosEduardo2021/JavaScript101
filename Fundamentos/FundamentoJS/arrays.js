const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])


valores[4] = 10

console.log(valores)
console.log(valores.length) // A função 'length' diz quantos valores tem dentro do array.

valores.push({id: 3}, false, null, 'teste') // mistura dados, embora não seja uma boa pratica
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor de array e retorna
delete valores[0] // deletou o valor 0 da função
console.log(valores) 

console.log(typeof valores) // mostra de q tipo é o array, 'object'
