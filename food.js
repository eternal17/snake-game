import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
// setting anything to zero within the grid would technically mean its outside
// of the grid.

let food = getRandomFoodPosition()


// how much the snake grows when it eats the food. 
const EXPANSION_RATE = 1


export function update() {
    // if the snake is on the food, the snake needs to be expanded
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}


// this loop will draw/render everythig on the screen. 
export function draw(gameBoard) {

    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

// return a new food position, but most importantly, one that is not already on the snake.
function getRandomFoodPosition() {
    let newFoodPosition

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}