import { getInputDirection } from "./input.js  "

/* the amount of time the snake moves per second. Will help with 
how much rendering needs to be done, we may not need to render every 0.001 
seconds. Therefore we won't do anything in the main function until this 
threshold has been met*/
export const SNAKE_SPEED = 5


// position of snake based of x,y coordinates on the grid. X and Y at 11 is the middle of the screen. 
const snakeBody = [{ x: 11, y: 11 }]

// this is a function that will update all the logic for the game
export function update() {
    const inputDirection = getInputDirection()

    // this is for the body of the snake, each bodypart should follow the head of the snakes movement. 
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // the previous body parts position will be set to the current body part position. 
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // update the head based on where we are moving. 
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}


// this loop will draw/render everythig on the screen.
export function draw(gameBoard) {

    // Loop through each piece of the snake and add it to the screen
    snakeBody.forEach(bodypart => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = bodypart.y
        snakeElement.style.gridColumnStart = bodypart.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
} 