//Object methods:
const person = {
    name:'Marko',
    age: 24,
    city: 'Donetsk',
    getName() {
        return this.name
    },
}
console.log(person.getName())

const dividend = {
    profit:'$100 000'
}
//Assign
console.log(Object.assign(person, dividend))
console.log({...person, ...dividend})
//Entries
console.log(Object.entries(person).join('\n'))
//Keys and values
console.log(Object.keys(person))
console.log(Object.values(person))