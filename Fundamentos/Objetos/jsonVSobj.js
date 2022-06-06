const obj = {a: 1, b: 2, c: 3, somA () {return a + b + c}}

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))  - formato errraado

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) - formato errado

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // formato válido, repeitar o formato das aspas

//console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": { }, "e" [ ]} ')) // Observe q o primeiro valor numerio não tem aspas, o valor de string esta com 
                                                                // aspas duplas, o valor booleani tambem é suportado, pode se colocar um objeto usando 
                                                                // as { }, e tambm um arraay [ ]. 


