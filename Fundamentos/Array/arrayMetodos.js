const pilotos = [ 'Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  // massa quebrou o carro! Esse comando remove o ultimo elemento.

console.log(pilotos)

pilotos.push('Verstappen')  // adiciona um elemento a lista
console.log(pilotos)

pilotos.shift()  // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')  // adiciona no começo da lista
console.log(pilotos)

// splice pode adicionar ou remover elemento

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1)  // Massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // nesse caso o ultimo não entra, sendo o 'Verstappen'
console.log(algunsPilotos2)
