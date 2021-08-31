const aprovados = [ 'Agatha', 'Alex', 'Douglas', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ) ${nome }`)

})

aprovados.forEach( nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// são sempre buscado 3 item, o nome , o indice e o array