// 1. Create two variables, firstCard and secondCard. 

//let firstCard = 7;
//let secondCard = 3;
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
//let sum = firstCard + secondCard
//if (sum< 21){
//console.log('Do you want to draw a new card?')
//} else if (sum === 21){
//   console.log("Wohoo! You'got BLACKJACK")
//} else if (sum>21){
//  console.log("You're out of the game!")
//}

/*
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if(age>21){
      console.log("Welcome!")
} else{
  
    console.log("You can not enter the club!")
}



IF/ELSE...IF/ELSE STATEMENT


// Check if the person is elegible for a birthday card from the King! (100)

let age = 145

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
 
THE IF...ELSE STATMENR FOR OUR GAME

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 4

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}


*/

let firstCard = getRamdomCard()
let secondCard = getRamdomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true
let isAlive = false;
// Write the conditional according to these rules:
// 1. Declare a variable called message and assign its value to an empty string
let message = ""




// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
// JavaScript No recueda las salidas de consola

// 2. Flip its value to false in the appropriate code block 
// 2. Reassign the message variable to the string we're logging out

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById('message-el')
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "Per",
    chips: 200
}

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips


function getRamdomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    } // 1-13
}
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById('sum-el');
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById('cards-el')

// ANOTHER WAY MORE DINAMIC : se puede tomar por clases, ids o selectores  document.querySelector("#sum-el")

// Create a new function called startGame() that calls renderGame()

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
    renderGame()
}
function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = `Cards:  `//${cards[0]},${cards[1]}
    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum:" + sum


    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"

    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true

    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // CASH OUT

    messageEl.textContent = message

}
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true

} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
// CASH OUT

console.log(isAlive)


/**
 * console.log(4 === 3)  // false      
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    //false
console.log(3 >= 3)   // true
console.log(11 <= 11) //true
console.log(3 <= 2)   //false
 * 
 * 
 * 
 * 
 */

function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
/**ASIDE MATH RAMDOM
 * 
 * let randomNumber = Math.random()

console.log(randomNumber)


/* 
// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor( Math.random() * 6 +1 )

console.log(randomNumber)


What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

/**
 * ARRAYS
 * // Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let featureExperience =["engenering", 
"Turism", 
"Carpentry",
 "Filshopy"
 ]

 // 0 indexed
let featuredPosts = [
    "Check out my Netflix clone",        // 0 
    "Here's the code for my project",    // 1
    "I've just relaunched my portfolio"  // 2
]

console.log( featuredPosts.length )=3

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let myIntroduce =["luis", 28 , true]


let cards = [7, 4]
cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

// How can you remove the last item in an array? Try to google it!
messages.pop(messages.length-1)
console.log(messages)

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 0;  count < 100;  count += 10 )  {
    
    console.log(count)

}



// for (let i = 0; i < 6; i += 1) {
//     console.log(i)
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}


ARRAY AT DOM
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}


// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)


// Objects - store data in-depth - composite / complex data type
// key-value pairs


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
    moreThanTwoFlowwer: false,
    name: 'castleRose',
    number: 223122,
    codeBaths: [12,12,45,45]
}

console.log(castle.name)
 */