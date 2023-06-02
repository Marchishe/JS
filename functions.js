//functions
function getName(){
    return 'Marko'
}
getName()

//ES6
const getSurname = () => 'Volchenko'
getSurname()

const getPrice = (name) => {
    if (name === 'Mercedes'){
        return 100000
    }else
    if (name === 'Lada'){
        return 400000
    }else{
        return null
    }
}
console.log('$', getPrice('Lada'))