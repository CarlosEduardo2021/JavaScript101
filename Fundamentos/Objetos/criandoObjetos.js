// Usando a notação literal

const obj1 = {}
console. log(obj1)

// objeto em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtora

function Produto (nome, preço, desc) {
    this.nome = nome
    this.getPreçoComDesconto = () => {
        return preço * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPreçoComDesconto(), p2.getPreçoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)

        }
    }
}
 const f1 = criarFuncionario('João', 7980, 4)
 const f2 = criarFuncionario('Maria', 11400, 1)
 console.log(f1.getSalario(), f2.getSalario())

 // Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// função famosa q retorna  objeto...

const fromJSON = JSON.parse(' {"info" : "Sou um JSON"}')
console.log(fromJSON.info)
