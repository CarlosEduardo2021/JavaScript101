const carrinho = [
    '{ "nome": "Borracha","preço": 3.45}',
    '{ "nome": "Caderno", "preço": 13.90}',
    '{ "nome": "Kit de lapis", "preço": 41.22}',
    '{ "nome": "Caneta", "preço": 7.50}'
] 

// retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)