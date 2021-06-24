var a = 3
let b = 4
// de preferencia a usar 'let' em vez de 'var'
var a = 30
b = 40   //  não da pra redeclarar uma variavel usando 'let'

console.log(a,b)

a = 300  // variavel , ' pode varia'
b = 400
console.log(a,b)


const c = 5
//c = 50  'const' não muda
console.log(c)
// palavras reservadas, 'var' 'let' 'const'
// tudo aquilo q vc não tem motivo para mudar dentro do
// seu algoritimo, use 'const'