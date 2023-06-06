//Default parameter
const getPrice = (name = 'Mercedes') =>
    name === 'Mercedes'
        ? 100000
        :name === 'Lada'
            ? 400000
            :null

console.log(getPrice())