const board = document.querySelector('#board')
const colors = ['#FA8072', '#ADFF2F', '#FFFF00', '#FF69B4', '#FFFF00','#20B2AA','#8B0000','#9932cc']
const SQUARES_NUMBER = 497;


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColors()
    element.style.backgroundColor = color
    element.style.boxShandow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`

}
function getRandomColors() {
    const index = Math.floor(Math.random() * colors.length)

return colors[index]
}