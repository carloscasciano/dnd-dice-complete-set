// Basic Function

const randomNumber = () => {return Math.random()}

// Basic Pythagorean DiceSet
// Output: Random Number from 1 to Total dice sides

const rollD4 = () => {return (Math.floor(randomNumber()*4)+1)}
const rollD6 = () => {return (Math.floor(randomNumber()*6)+1)}
const rollD8 = () => {return (Math.floor(randomNumber()*8)+1)}
const rollD10 = () => {return (Math.floor(randomNumber()*10)+1)}
const rollD12 = () => {return (Math.floor(randomNumber()*12)+1)}
const rollD20 = () => {return (Math.floor(randomNumber()*20)+1)}

// Extra D100
// Output: Random Number from 1 to 100

const rollD100 = () => {return (Math.floor(randomNumber()*100)+1)}

// Flip a Coin
// Output: String with "heads" or "tails"

const flipACoin = () => { return ((randomNumber() >= .5) ? "heads" : "tails")}

// AnySided Dice
// Input: Number larger or equal than 2
// Output: Random Number from 1 to Input value

const anySidedDice = (numberOfSides) => {
    if (typeof numberOfSides != "number") {return "must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    return (Math.floor(randomNumber() * numberOfSides)+1)
}

// Dice with Modifier
// Input: 
// -- I: Number larger or equal than 2 
// -- II: Value to be added or subtracted
// Output: andom Number from 1 to first input value added second input

const anySidedDiceModifier = (numberOfSides, modifier) => {
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    if (typeof modifier != "number") {return "modifier must be a number"}
    return (Math.floor(randomNumber() * numberOfSides)+1) + modifier
}

// Many Dices of Any Sides
// Input: 
// -- I: Number of dices to be rolled, must be larger or equal than 1
// -- II: Side of dices to be rolled
// Output: Array with two elements
// -- I: Sum of rolls
// -- II: All roll values

const manySidedDice = (numberOfDices, numberOfSides) => {
    if (typeof numberOfDices != "number") {return "dice volume must be a number"}
    if (numberOfSides <= 0) { return "must have at least 1 dice" }
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }

    let returnArr = [[],[]]
    for (let i = 0; i < numberOfDices; i++) {
        returnArr[1].push(anySidedDice(numberOfSides))
    }
    returnArr[0] = returnArr[1].reduce((acc,currVal) => acc + currVal)
    return returnArr
}

// DiceBag
// Input: array with any elements, elements are strings of the dices to roll
// --example input: ["d4", "d6", "d10", "d100", "d42"] 
// Output: Array with two elements
// -- I: Sum of rolls
// -- II: All roll values

const diceBag = (userDiceArray) => {
    let returnArr = [[],[]]
    for (let i = 0; i < userDiceArray.length; i++) {
        const numberOfSides = userDiceArray[i].substr(1)
        returnArr[1].push(anySidedDice(numberOfSides))
    }
    returnArr[0] = returnArr[1].reduce((acc,currVal) => acc + currVal)
    return returnArr
}

// Loaded Dice
// Input: Array with three elements
// -- I: Sides for the loaded dice
// -- II: Cheat level (can use string pre-sets ("bard","rogue" or "mobster") or a cheat percentage from 0 to 1) 
// -- III: Desired Value that can be get as output
// example Input : (6, "rogue", 3)
// Output: Random number with higher chances of getting third input


const loadedDice = (numberOfSides, cheatLevel, desiredValue ) => {
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    if (typeof desiredValue != "number") {return "must be a number"}
    if (desiredValue > numberOfSides) { return "must be contained in possible values" }
    
    let closedCheatLevel = 0
    let cheatFactor = randomNumber()

    switch (cheatLevel) {
        case 'bard':
            closedCheatLevel = .12
            break
        case 'rogue':
            closedCheatLevel = .35
            break
        case 'mobster':
            closedCheatLevel = .70
            break
        default:
            closedCheatLevel = cheatLevel
    }
    
    if (cheatFactor < closedCheatLevel) {
        return desiredValue
    }
    return anySidedDice(numberOfSides)
}

// Roll Set and delete Minor Roll
// Input: numberOfDices, numberOfSides
// Return: array with 3 elements: total result, array without minor, roll that got out

const rollSetDeleteMinor = (numberOfDices, numberOfSides) => {
    if (typeof numberOfDices != "number") {return "dice volume must be a number"}
    if (numberOfSides <= 0) { return "must have at least 1 dice" }
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    let resultArr = [[],[],[]]
    let completeRoll = manySidedDice(numberOfDices, numberOfSides)
    resultArr[1] = completeRoll[1].sort()
    resultArr[2] = resultArr[1].shift()
    resultArr[0] = resultArr[1].reduce((acc,currVal) => acc + currVal)
    return resultArr
}

// Roll Set and delete Major Roll

const rollSetDeleteMajor = (numberOfDices, numberOfSides) => {
    if (typeof numberOfDices != "number") {return "dice volume must be a number"}
    if (numberOfSides <= 0) { return "must have at least 1 dice" }
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    let resultArr = [[],[],[]]
    let completeRoll = manySidedDice(numberOfDices, numberOfSides)
    resultArr[1] = completeRoll[1].sort().reverse()
    resultArr[2] = resultArr[1].shift()
    resultArr[0] = resultArr[1].reduce((acc,currVal) => acc + currVal)
    return resultArr
}



