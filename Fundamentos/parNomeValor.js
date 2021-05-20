// par nome/valor
const saudacao ='Opa'  // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}
console.log(saudacao)

// Objetos são grupos aninhados de pares nome/valor

const cliente ={
    nome: 'Eduardo',
    idade: 38,
    peso: 140,
    endereco: {
        logradouro: 'Rua Very Paralelepipido',
        numero: 666 
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)