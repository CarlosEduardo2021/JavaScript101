function tratarErroElancar(erro){
    //throw new Error(' Problema no processamento')
   // throw 10
   // throw true
   //throw 'mensagem'
   throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date 
    }
}

function imprimirNomeGritado(obj) {
    try{

    console.log(obj.nome.toUpperCase() + '!!!') // Para resolvertirar 'nome' e colocar 'name' aqui.
    } catch (e){  
        tratarErroElancar(e)
    } finally {
         console.log('final')
        }
}

const obj = {name: 'Carlos' }
imprimirNomeGritado(obj)