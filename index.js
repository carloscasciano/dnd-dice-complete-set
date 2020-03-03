const randomNumber = () => {return Math.random()}

const rollD4 = () => {return (Math.floor(randomNumber()*4)+1)}
const rollD6 = () => {return (Math.floor(randomNumber()*6)+1)}
const rollD8 = () => {return (Math.floor(randomNumber()*8)+1)}
const rollD10 = () => {return (Math.floor(randomNumber()*10)+1)}
const rollD12 = () => {return (Math.floor(randomNumber()*12)+1)}
const rollD20 = () => {return (Math.floor(randomNumber()*20)+1)}

const rollD100 = () => {return (Math.floor(randomNumber()*100)+1)}

const flipACoin = () => { return ((randomNumber() >= .5) ? "heads" : "tails")}

const anySidedDice = (numberOfSides) => {
    if (typeof numberOfSides != "number") {return "must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    return (Math.floor(randomNumber() * numberOfSides)+1)
}

const anySidedDiceModifier = (numberOfSides, modifier) => {
    if (typeof numberOfSides != "number") {return "sides must be a number"}
    if (numberOfSides <= 1) { return "must have at least 2 sides" }
    if (typeof modifier != "number") {return "modifier must be a number"}
    return (Math.floor(randomNumber() * numberOfSides)+1) + modifier
}

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

const diceBag = (userDiceArray) => {
    let returnArr = [[],[]]
    for (let i = 0; i < userDiceArray.length; i++) {
        const numberOfSides = parseInt(userDiceArray[i].slice(1)) 
        returnArr[1].push(anySidedDice(numberOfSides))
    }
    returnArr[0] = returnArr[1].reduce((acc,currVal) => acc + currVal)
    return returnArr
}

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

export 
    {randomNumber,
    rollD4,
    rollD6,
    rollD8,
    rollD10,
    rollD12,
    rollD20,
    rollD100,
    flipACoin,
    anySidedDice,
    anySidedDiceModifier,
    manySidedDice,
    diceBag,
    loadedDice,
    rollSetDeleteMinor,
    rollSetDeleteMajor}