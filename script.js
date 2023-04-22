const weapons = ["rock", "paper" , "scissor"]
let ai_score  = 0
let human_score = 0

function AI_choice(){
    const index = Math.floor(Math.random()* weapons.length)

    const ai_weapon = weapons[index] 
    return ai_weapon
}


function Human_choice() {
    const human_weapon = prompt('Enter your weapons',undefined)
    return human_weapon.toLowerCase()
    
}

function gameChecker(playerSelection , aiSelection){
    console.log("human",playerSelection)
    console.log("ai",aiSelection)
    if (aiSelection == 'rock' && playerSelection == 'scissor' || aiSelection == 'paper' && playerSelection == 'rock'
    || aiSelection == 'scissor' && playerSelection == 'paper'){
        console.log("ai wins " + aiSelection + ' beats ' + playerSelection)
        ai_score += 1
        console.log(ai_score)

    }
    else if (playerSelection == 'rock' && aiSelection == 'scissor' || playerSelection == 'paper' && aiSelection=='rock'
    || playerSelection == 'scissor' && aiSelection == 'paper'){
        console.log('human wins ' + playerSelection + ' beats ', aiSelection)
        human_score += 1
        console.log(human_score)
    }
    else if (aiSelection == playerSelection){
        console.log('tie',aiSelection,playerSelection)
    }
    else {
        // if user input is nothing or unexpected input than do nothing move on so leaving empty
    }

}


function game(){

    let game_round = 0
    
    while (game_round < 5){
        gameChecker(Human_choice() , AI_choice())
        game_round ++
    }
    
    if (human_score > ai_score){
        console.log('winner by tko human',human_score)
    }
    else if (ai_score > human_score){
        console.log('winner by tko ai',ai_score)
    }
    else {
        console.log('Loosers it\'s tie')
    }
}

game()