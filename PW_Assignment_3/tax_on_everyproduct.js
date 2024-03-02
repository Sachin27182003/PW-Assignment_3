


let expenses = [
    { amount: 100, category: "Utilities"},
    { amount: 200, category: "Groceries"},
    { amount: 50, category: "Entertainment"}
]


let amountAfterTax = expenses.map((expenses) => {
    let calculatedAmount = (expenses.amount + (expenses.amount * 0.1))
    return {
        amount: expenses.amount,
        category: expenses.category,
        amountAfterTax: calculatedAmount
    };
})


console.log(amountAfterTax)


let afterFilter = expenses.filter((expense) => {
    return expense.category== "Groceries";
})

console.log(afterFilter)

let totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0 )

console.log(`Total amount is ${totalAmount}`)


let High_Low = expenses.map((expense) => {
    if(expense.amount > 100){
        return "High Expense"
    }else{
        return "Low Expense"
    }
})


console.log(High_Low)