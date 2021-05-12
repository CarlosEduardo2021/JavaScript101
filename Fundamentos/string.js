const escola = "Sujeit3"

console.log(escola.charAt(4)) //Gera letra "i" por ser a 4 letra, sendo a primeira 0.
console.log(escola.charAt(9)) // Gera uma resposta em branco, (indice fora do tamanho da string )
console.log(escola.charCodeAt(6)) // Valor dentro da tabela Unicode*
console.log(escola.indexOf('t')) // Resposta  = 5

console.log(escola.substring(1)) // Resposta = ujeito - No caso vai a partir do indice 1 até o final
console.log(escola.substring(0,3)) // Reposta = Suj - Vai do indice 0 até o 3, sem incluir o 3

console.log('Sempre '.concat(escola).concat("!")) // União da palavra "Sempre" com a função "escola /              
console.log('Sempre ' + escola + "!") // e o ponto "!". Resposta = Sempre Sujeito ! 2 exemplos.


console.log(escola.replace(3, 'o')) // Substitui o numero "3" pela letra "o"
console.log(escola.replace(/\d/, 'y')) // Amostra  !!! - Expressão regular, do curso de Reget, o comando
                                       // substitui todos os digitos "d" sendo o numero 3 pela letra "y"

console.log(escola.replace(/\w/g, 'y')) //  Outra forma de Reget, substitui tudo por "y"

console.log('Emerson,Amanda, Eduardo'.split(',')) // Transforma uma string em um array, no lugar de 
                                                  // usar "(',')" pode usar "(/,/)"