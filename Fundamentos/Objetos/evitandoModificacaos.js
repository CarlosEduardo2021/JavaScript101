// Object.preventExtensions 

const produto = Object.preventExtensions({ // não consigo adicionar nenhum atributo , mas consigo excluir
    nome: 'Qualquer', preço: 1.99, tag: 'promoção'
})
console.log('Extencivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal  - não consegue adicionar, excluir, mas consegue nodificar

const pessoa = { nome: 'Juliana' , idede: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idede = 29
console.log(pessoa)

// Object.freeze = selado = valores constates - não consegue adicionar, excluir ou modificar
