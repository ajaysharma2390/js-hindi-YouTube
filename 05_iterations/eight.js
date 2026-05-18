// ***************** reduce ********************

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currVal) { //=>by default the initial value will be taken array[0] and curVal will be array[1]
//     console.log(`value of acc : ${acc} and curVal : ${currVal}`);
    
//     return acc + currVal
// }, 0 )

//converting it into arrow function:

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0 )

console.log(myTotal);



// ************* another example *****************


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce(  (acc, item) => (acc + item.price) , 0  )

console.log(priceToPay);