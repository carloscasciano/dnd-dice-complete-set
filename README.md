# dnd-dice-complete-set

A Library with many different dice rolling functions, first used for personal projects, but now available for anyone who wants to use it.

## Installing
  
* `npm install dnd-dice-complete-set`

## Importing

* `import {rollD20} from 'dnd-dice-complete-set'`

## Content:

#### Platonic Solids (Basic RPG Dice Set)
  
Calling any of the functions below, returns dice result for respesctive dice.

```javascript
rollD4()  // returns random number from 1 to 4  
```
```javascript
rollD6()  // returns random number from 1 to 6  
```
```javascript
rollD8()  // returns random number from 1 to 8  
```
```javascript
rollD10()  // returns random number from 1 to 10 
```
```javascript
rollD12()  // returns random number from 1 to 12  
```
```javascript
rollD20()  // returns random number from 1 to 20  
```
```javascript
rollD100()  // returns random number from 1 to 100  
```

  
#### Flip a Coin  
  
```javascript 
flipACoin() // returns string "heads" or "tails"
```

If you need the number instead of strings, check `anySidedDice()` function.
  
#### Loaded Dice (cheat)

Loaded Dice function returns the value of a not fair dice. It receives 3 parameters:  

* number of sides: how many sides the dice to bo rolled has.
* cheat level: how strong is the cheat factor. You can use any value from ```0``` to ```1```. There are 3 pre-made strings you can use - ```"bard"``` for low-level cheat, ```"rogue"``` for medium-level cheat and ```"mobster"``` for high-level cheat. 
* desired value: the number you want to cheat.

Examples: 
```javascript
loadedDice(6,"bard",1) // rolls a 6 sided dice with a slightly higher chance of getting 1 as result.

loadedDice(10, 0.75, 7) // rolls a 10 sided dice with (75% + regular chance) of getting a 7. regular chance depends on dice size.

```
  

#### Any Sided Dice
#### Any Sided with Modifier
#### Many Dices
#### Dice Bag
#### Roll and drop Minor Value
#### Roll and drop Major Value