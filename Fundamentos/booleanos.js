let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("os verdadeiros ...")
console.log(!!3) // colocar sempre as duas negação '!!' para mostar que o numero é verdadeiro.
console.log(!!-1)
console.log(!!' ') // com um espaço em branco já funciona
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo))
console.log(!!(isAtivo = true))

console.log("os falsos ...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("PRA FINALIZAR ....")
console.log(!!(''|| null || 0 || ' '))  // Nesse caso o resultado é true, pq existe um unico valor
                                        // verdadeiro que é o ultimo
// outro exemplo
let nome = ''

console.log(nome || "Desconhecido") // como o nome é representado por um valor 
                                    // falso, ele responde desconhecido 
                                        