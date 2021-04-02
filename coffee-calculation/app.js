let array = [2,3,1,5]
// price per coffee = 1.25
const coffeePrice = 1.25
// sum of coffee = 13.75

const total = array.reduce((acc, cur)=>{
    return acc + cur
}, 0)
console.log(`Total price for coffee is ${total * coffeePrice} `)
