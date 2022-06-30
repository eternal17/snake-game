// this is where we get all of the input information from. 


// by default we dont want the snake to be moving anywhere
let inputDirection = { x: 0, y: 0 }


// we use this variable to check last input direction and
// not allow the snake to go back from the direction it came. 
let lastInputDirection = { x: 0, y: 0 }


// this listener will listen to the keydown on the arrow keys and change the
// direction, based on what key has been pressed. 
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}
