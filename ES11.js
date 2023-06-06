//ES11

//Optional chaining
const phone = {
    model: {name:'Samsung'},
    price: '1000$',
    brand:'android'
}

//old
if(phone.brand)
    console.log(phone.brand)

//new
console.log(phone?.brand)

//Nulish Coalescing '||'
// const brand = phone?.brand || 'Samsung'
// console.log(brand)
//'??'
const age = 0
console.log(age ?? '23')
//'&&'
const brand = phone?.brand && phone.brand
console.log(brand);