import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'


let lastRenderTime = 0

const gameBoard = document.getElementById('game-board')
/*set up a game loop, a function that will 
repeat it self over and over again on a set interval, that way
the rendering can constantly be updated, ie the the snake position can be 
updated. */
function main(currentTime) {
    /* requesting from the browser when the next frame can be animated.
   we want to always request the animation frame, no matter what */
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    // we will return out of this function if snake does not need to be moved
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    /* last render time updated if the snake speed is greater than seconds
     since laster render */
    lastRenderTime = currentTime

    // this is a loop that will update all the logic for the game
    update()

    // this loop will draw/render everythig on the screen.
    draw()

}

// window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = " "
    drawSnake(gameBoard)
}