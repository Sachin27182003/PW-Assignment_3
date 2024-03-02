

let originalNumbers = [2, 5, 8, 10, 3]

originalNumbers.forEach((num, index, originalNumbers) => originalNumbers[index] = num*num)

console.log(originalNumbers)

let newArray = [];

originalNumbers.forEach((num) => {
    if(num % 2 == 0){
        newArray.push(num)
    }
})

console.log(newArray)