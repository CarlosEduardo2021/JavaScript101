const nome = 'Rebeca'
const concatenacao = "Olá " + nome + '!'

const template = `
Olá
${nome} !`
console.log(concatenacao, template)

 // expressoes

 console.log(`1 + 1 `) // Não soma, só mostra - 1 + 1

 console.log(`1 + 1 = ${1 + 1}`) // Neste caso mostra a conta e o resultado

 const up = texto => texto.toUpperCase()
 console.log(`Ei ...${up(`cuidado`)}!`)  // A palavra cuidado passa para toda em letras maiuscula
                                         // Mais explicações no futuro