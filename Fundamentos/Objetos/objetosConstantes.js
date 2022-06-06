// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}

// pessoa = { nome: 'Anna'}

Object.freeze(pessoa) // nesse caso estamos congelando o objeto pessoa

pessoa.nome = 'Mari'    // iguinorado
pessoa.end = 'Rua ABC'  // ignorado
delete pessoa.nome     // ignorado

console.log(pessoa.nome) // o objeto continua sendo pedro, pois esta congelado

const pessoaConstante = Object.freeze({ nome: 'João'}) // se colocar desde o inicio fica imotavel
pessoaConstante.nome = 'Maria' // continua João
console.log(pessoaConstante)