class Lançamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
    
}

class CicloFinanceiro {
constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamento = []
}


addLancamentos (...lancamento) {
lancamento.forEach( l => this.lancamento.push ( l ))
}

sumario () {
let valorConsolidado = 0
this.lancamento.forEach( l => {
    valorConsolidado += l.valor
})
return valorConsolidado
}

}

const salario = new Lançamento( 'Salario', 45000)
const contaDeluz = new Lançamento('luz', -220)

const contas = new CicloFinanceiro(6, 2019)
contas.addLancamentos( salario, contaDeluz)
console.log (contas.sumario())