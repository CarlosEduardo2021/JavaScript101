const resultado = nota => nota >= 7 ? 'Aprovado': 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6,7))

// O operador ternario é composto por 3 parte, a primeira  'nota >= 7', vai retornar sempre
// verdadeiro ou falso, vem o '?', a primeira pare, vai retornar se é 'verdadeiro' e a segunda
// vai retornar se é 'falso'.