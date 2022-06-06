// algumas mudanças do ES2015, na notação

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c} // versão nova, EQST
console.log(obj1, obj2) //  resultado igual para as duas

const nomeAttr = 'nota'
const valorAttr = 7.87


const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} //tambem versão nova
console.log(obj4)

const obj5 = {
    função1: function(){   
        //...  vc defini como quiser, nesse modo antigo
    },
    // (abaixo) tambem foi simplificado, como definir funções dentro de um objeto literal.
    função2(){ // varias parte foram eliminada  de acordop com o exemplo acima.

    }
}
console.log(obj5) // resposta das duas é exatamente igual, a antiga e nova versão