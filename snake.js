import { getInputDirection } from "./input.js  "

/* the amount of time the snake moves per second. Will help with 
how much rendering needs to be done, we may not need to render every 0.001 
seconds. Therefore we won't do anything in the main function until this 
threshold has been met*/
export const SNAKE_SPEED = 5


// position of snake based of x,y coordinates on the grid. X and Y at 11 is the middle of the screen. 
const snakeBody = [{ x: 11, y: 11 }]


let newBodyParts = 0

// this is a function that will update all the logic for the game
export function update() {

    addBodyParts()
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

export function expandSnake(amount) {
    newBodyParts += amount
}

// determine if a certain position is on the snake.
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((bodyPart, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(bodyPart, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}


// checks if the snake has crossed over on itself
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

// checks if the 
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addBodyParts() {
    for (let i = 0; i < newBodyParts; i++) {
        // append a new element onto the end of the snake body 
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    // reset this everytime so the snake doesnt keep on expanding
    newBodyParts = 0
}