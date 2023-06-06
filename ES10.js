// ES10

//flat
const cars = ['Mersedes', 'Audi', 'Reno', ['Opel', 'BMW']]
console.log(cars.flat())

//Object from entries
const person = {
    name:'Marko',
    age: 24,
    city: 'Donetsk',
    getName() {
        return this.name
    },
}

const personArray = [['name', 'Max'],['age', '23']]
console.log(Object.fromEntries(personArray))

//toString
const price = 100000
console.log(price.toString());
console.log(String(price));

//toNumber
const priceString = '100000'
console.log(+priceString);
console.log(Number(priceString));
