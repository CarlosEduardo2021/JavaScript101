function compras (trab1, trab2) {
    const comprarSorvete = trab1 || trab2  // o simbolo || seria o 'ou'
    const compraTv50 = trab1 && trab2 // o simbolo && seria 'e', no caso os 2
    // const compraTv32 = !!(trab1 ^ trab2) // bitwise , e o simbolo ^, seria 'ou exclusivo""bit a bit"
    const compraTv32 = trab1 !=  trab2 // seria trab1 'diferente'  trab2, mais interessante.
    const manterSaude = !comprarSorvete // operador unário, a "!" seria a negação logica.

    return { comprarSorvete, compraTv50, compraTv32, manterSaude }

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
