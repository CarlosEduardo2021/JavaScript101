// Clouser é escopo criado quando uma função é declarado
// Esse escolo permite a fução acessar e manipular variaveis externas á função

//  Contesto lexico em acão !

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
        
}

const minhaFuncao = fora()
console.log(minhaFuncao())