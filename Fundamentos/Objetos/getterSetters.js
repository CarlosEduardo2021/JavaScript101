const sequencia = {
    _valor: 1,    // convenção,'_' ' mostarndo aos desenvolvedores q essa é uma variavel
    get valor () { return this._valor++}, // pretendida ser acessada apenas internamente dentro do objeto 'sequencia'
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // pelo fato de estar tentando trazer a seguencia para um valor menor, ela seguiu.
console.log(sequencia.valor, sequencia.valor)