// Write a program that prints the numbers from 1 to 100. 

//Creates array from 1--100
const arrayOfNumbers = Array.from({length: 101}, (x, i) => i)
//console.log(arrayOfNumbers)--array is functional

//write for loop to iterate over array
for (let i = 0; i <= 100; i++) {
    const currentNumber = arrayOfNumbers[i]
    //console.log(currentNumber)--for loop is functional

    //decision making; conditional statements using operators
    
        // For numbers which are multiples of both five and seven print "ChickenMonkey". | most specific goes on top-->if statement
    if (currentNumber % 5===0 && currentNumber % 7===0) {
        console.log("ChickenMonkey")
        // For multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number | else if
    } else if (currentNumber % 5===0) {
        console.log("Chicken")
        // For the multiples of seven (7, 14, 21, etc.) print "Monkey". | else if
    } else if (currentNumber % 7===0) {
        console.log("Monkey")
        // For all other numbers | else
    } else {
        console.log(currentNumber)
    }
}

