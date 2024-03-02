

const orderList = [
    { name : "Laptop", price: 12000},
    { name: "Mobile", price : 7000},
    {name: "mobile charger", price: 1500},
    {name: "Laptop Charger", price: 10500}
]


let totalPrice = 0;

orderList.forEach((orderList) => {
    totalPrice += orderList.price;
})


console.log(`Total price of all products is ${totalPrice}`);
