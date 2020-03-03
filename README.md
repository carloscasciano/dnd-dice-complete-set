# dnd-dice-complete-set

A Library with many different dice rolling functions, first used for personal projects, but now available for anyone who wants to use it.

## Installing
  
`npm install dnd-dice-complete-set`

## Importing

`import {rollD20} from 'dnd-dice-complete-set'`

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
* cheat level: how strong is the cheat factor. You can use any value from ```0``` to ```1```.
  * There are 3 pre-made strings you can use
  - ```"bard"``` for low-level cheat
  -```"rogue"``` for medium-level cheat
  ```"mobster"``` for high-level cheat  
* desired value: the number you want to cheat.

Examples: 
```javascript
loadedDice(6,"bard",1) // rolls a 6 sided dice with a slightly higher chance of getting 1 as result.

loadedDice(10, 0.75, 7) // rolls a 10 sided dice with (75% + regular chance) of getting a 7. regular chance depends on dice size.

```
#### Any Sided Dice

A Dice function that receives any number as argument and rolls a dice with that many sides.

```javascript 
anySidedDice(42) // returns random number from 1 to 42  
```  
  
#### Any Sided with Modifier

A Dice function that receives any number as first argument, rolls a dice with that many sides and add a modifier value.

```javascript 
anySidedDiceModifiers(20, 2) // returns random number from 1 to 20 and sums 2  

anySidedDiceModifiers(6, -1) // returns random number from 1 to 6 and detracts 1  
``` 

#### Many Dices

The equivalent to roll "4d8". Takes the number of dices as first argument and the dice side as second argument.
Returns an array, first element is sum of roll and second element are the rolls itself.

```javascript 
manySidedDice(4, 8) // returns, for example: [[22],[8,7,2,5]]

``` 

#### Dice Bag

Receives as argument a string with how many dices you want to roll, using dice notation.
Returns an array, first element is sum of roll and second element are the rolls itself.

```javascript 
diceBag(["d4", "d6", "d10", "d100"]) // returns, for example: [[74],[3,6,10,55]]

``` 

#### Roll and drop Minor Value
  
Receives two arguments, number of dices and second argument which dice sides. Make roll and deletes minor value.
Returns an array with three elements, first is total roll after taking minor, second is full array without minor and third is minor value.

```javascript 
rollSetDeleteMinor(4,6) // rolls 4d6 and returns, for example: [[15],[6,6,3],[1]]

``` 

#### Roll and drop Major Value

Receives two arguments, number of dices and second argument which dice sides. Make roll and deletes major value.
Returns an array with three elements, first is total roll after taking major, second is full array without major and third is major value.

```javascript 
rollSetDeleteMinor(4,6) // rolls 4d6 and returns, for example: [[10],[6,3,1],[6]]

``` 