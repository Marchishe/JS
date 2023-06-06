// ES12

//replaceAll
const text = 'Marko love frogs'
console.log(text.replaceAll('Marko', ''))

//new logical assigment operators
let newText = ''
newText ||=  text
console.log(newText)

//Numeric literal separators
const price = 100000000
const newPrice = 100_000_000
console.log(price);
console.log(newPrice);