// --------------CHALLENGE #1
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

/*

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 21) {
    console.log("You can not enter the club")
} 
else {
    console.log("Welcome!")
}

*/

// --------------CHALLENGE #2
// Check if the person is elegible for a birthday card from the King! (100)

/*

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age == 100) {
    console.log("Here is your birthday card from the King!")
}
else if (age >= 100) {
    console.log("Not elegible, you have already gotten one")
}
else{
    console.log("Not elegible")
}

*/

// --------------CHALLENGE #3
/*
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


if (sum <= 20){
    console.log("Do you want to draw a new card? 🙂")
}
else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳")
}
else {
    console.log("You're out of the game! 😭")
}

*/

// --------------CHALLENGE #3

/*
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true
// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// 3. Log it out to check that you're doing it right

console.log(isAlive)
*/

// --------------CHALLENGE #4
/*
console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false
*/
// --------------CHALLENGE #5

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(message)



