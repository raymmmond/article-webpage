let count= 0

console.log('count')


function increment()  {
    console.log("The button was clicked")
}

function myAge(){
    console.log(42)
} 

myAge()

let lapscompleted = 0


function incrementlap(){
    lapscompleted = lapscompleted + 1
}

incrementlap()
incrementlap()
incrementlap()


console.log(lapscompleted)

let countEl = document.getElementById("count-el")

console.log(countEl)

// let count = 0

// function increment(){
//     count= count + 1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }


let age = 22

if (age < 21){
    console.log("You are not of fucking age")

}
else if(age===22){
    console.log("You are eligible")

}
else{
    console.log("Do you!")
} 


let cards = [7, 3, 9]

for(
    let i = 0; i < cards.length; i++) {
        console.log(cards[i])
    }



let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}

// // CASH OUT!



// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}






// console.log(lapscompleted)
