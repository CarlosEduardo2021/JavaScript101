console.log ('01)', '1'== 1) // O simbolo = seguinifica atribuir,
                           // já == como no exemplo , esta perguntando se os nomeros são iguais.
                           // neste caso estamos perguntando o valor, não o tipo

console.log ('02)', '1' === 1) //  aqui o resultado é falso, pq esta perguntando se  '1' é estritamente
                               // igual a 1, e nop caso um é uma string e outro um number. por isso falso.

console.log ('03)', '3' != 3 )                          
console.log ('04)', '3' !== 3)  

console.log ('05)', 3 < 2)                         
console.log ('06)', 3 > 2 )                           
console.log ('07)', 3 <= 2)                           
console.log ('08)', 3 >= 2)   

const d1 = new Date (0)
const d2 = new Date (0)

console.log ('09)', d1 === d2 ) // O numero 0 siguinifica a data de referencia de javasdript, que é 01/01/1970, dependendo do fusorario pode dar alguma diferença.                         
console.log ('10)', d1 == d2 )                          
console.log ('11)',d1.getTime() === d2.getTime()) 

console.log ('12)', undefined == null )                        
console.log ('13)', undefined === null)                        

// via de regra é melhor usar o === ( estritamente igual)