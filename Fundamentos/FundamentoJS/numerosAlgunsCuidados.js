console.log( 7 / 0)   //O javascript defini essse tipo de resultado como Infinity
console.log("10"  / 2 )      
/// O javascript, analiza a string e se tiver como efetua a divisão, coisa q em algumas outras
/// linguagem não é possivel, tipo python.
console.log("10,2" / 2)
/// No caso não deu certo a disisão ---- ter cuidado com esse tipo de coisa.
console.log("Show" * 2) // idem
console.log(0.1 + 0.7) //Atenção ao resultado porque não é 0,8 e sim 0,79999999999999 gera uma inprecisão.
                       // nesta e na maioria das linguagens.
console.log((10.345).toFixed(2)) // funciona normal 
// console.log(10.toString())  -- esse não funciona, pq não da pra chamar o literal.função  , mas da pra chamar 
// dentro de () conforme função de linha 10.
console.log("3" + 2) // Resposta = 32 - Neste caso a string tem preferencia e a soma faz sentido na concatenação, entãoele une os numeros.
console.log("3" - 2) // Resposta = 1 - Pq a subtação na faz sentido na concatenação então ele subtrai.