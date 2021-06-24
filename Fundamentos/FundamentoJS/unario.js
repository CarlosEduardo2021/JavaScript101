let num1 = 1 // 
let num2 = 2

num1++ // formas pos-fixada, acrecenta 1 na variavel
console.log(num1)
--num1 // forma pre fixada, subtrai 1 na variavel, forma mai apressada.
console.log(num1)

console.log(++num1 === num2-- ) // no caso o resultado é verdadeira, pq o ++ foi executado antes da com paração e o -- foi comparado depóis da comparação.

console.log(num1 === num2) // Agora o resultado já é false, pq a adição e subtração acima já foram todas executadas.

// Dica:
//    Deixe o codigo o mais simples possivel (apesar de ser complessos e com o minimo de 
//    o minimo de anotação, use a refatoração para simplificar.
