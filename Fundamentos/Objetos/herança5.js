console.log(typeof String)
console.log( typeof Array )
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')

}

console.log('Carlos Eduardo'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5]. first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Deu Merda' // Essa açãso a primeira função e sobre escreveu meu nome
}                      // Cuidado para não subestituir comportamentos

console.log('Carlos Eduardo'.reverse())