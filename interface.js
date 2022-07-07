document.addEventListener("DOMContentLoaded", ()=>{


    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handClick)
    })

})


function handClick(event){

    console.log(event.target)

    let square = event.target
    let position = square.id

    if (handleMove(position)) {
       

        setTimeout(()=>{
            alert("o jogo acabou!  O ganhador foi o jogador " + playerTime)
        },10)
        
    }
    updateSquare(position)
}
/////


function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}


////

// mesma coisa que esse:
function updateSquares(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != "") {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}

// let button = document.getElementById("botao")
// button.addEventListener("click", ()=>{

//     console.log("teste");
//     restartGame()
    

    

    
       
    
    
    
// })


function resetGame(){

    restartGame()
    squares.forEach((square)=>{

        square.innerHTML = ''
        
    })
    updateSquares()
}