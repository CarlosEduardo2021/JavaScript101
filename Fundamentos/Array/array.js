console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados [0])
console.log(aprovados [1])
console.log(aprovados [2])
console.log(aprovados [3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')  // forma correta de adicionar/atribuir um array

console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados [8] === undefined)

console.log(aprovados)
aprovados.sort() // a partir desta linha é colocado em ordem alfabetica pela função 'sort'
console.log(aprovados)

delete aprovados[1]  // o segundo espaço ainda existe, mas setado como 'underfined'
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // A função 'splice' serve para serve 'tambem' para adicionar e remover elementos de um array, e adicionar e remover ao mesmo tempo
console.log(aprovados)
aprovados.splice(1, 2) // exclui 2 elementos a partir do num. 1
console.log(aprovados)

aprovados.splice(1, 2, 'Joao', 'tiao') // adiciona os 2 elementos 'Joao e Tiao'
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //// Nesse caso com o '0' , é adicionado 'Elemento1', 'Elemento2' logo apos o num 1 que seria 'Bia'
console.log(aprovados)
