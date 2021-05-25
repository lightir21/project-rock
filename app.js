
// function playRound (playerSelection, computerSelection){
//      playerSelection = playerSelection.toSelection();
//      computerSelection = computerPlay();
//      if (playerSelection === 'rock' && computerSelection === 'rock'){
//         return 'it\'s a draw';
//      }
//      else if (playerSelection === 'rock' && computerSelection === 'paper'){
//         return 'you lose!';
//     }
//     else if (playerSelection === 'rock' && computerSelection === 'scissors'){
//         return 'You win!';
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'paper'){
//         return 'it\'s a draw';
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'rock'){
//         return 'You win!';
//     }
//     else if (playerSelection === 'paper' && computerSelection === 'scissors'){
//         return 'you lose!';
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
//         return 'it\'s a draw';
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'rock'){
//         return 'you lose!';
//     }
//     else if (playerSelection === 'scissors' && computerSelection === 'paper'){
//         return 'You win!';
//     }
//     else{return 'try again'}
// } 

function computerPlay(num){
   num = Math.floor(Math.random() *  3) + 1;
   if (num === 1){
    return 'paper';
   } else if (num === 2){
       return 'rock';
   } else{
       return 'scissors';
   }
}

let paper = 0;
let rock = 0;
let scissors = 0;
let draw = 0;
let loss = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('rock, paper or scissors?').toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {return draw = 1};
    if (playerSelection === 'paper' && computerSelection === 'rock') {return paper = 1}
    if (playerSelection === 'rock' && computerSelection === 'scissors'){return rock = 1}
    if (playerSelection === 'scissors' && computerSelection === 'paper'){return scissors = 1}
    else {
     return loss = 1
    } 
}




function game(){
    playRound()
    let winTimes = 0;
    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++;
        console.log(`you won ${winTimes} times`);
        
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

    playRound()

    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++;
        console.log(`you won ${winTimes} times`);
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

    playRound()
    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++ ;
        console.log(`you won ${winTimes} times`);
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

    playRound()
    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++ ;
        console.log(`you won ${winTimes} times`);
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

    playRound()
    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++ ;
        console.log(`you won ${winTimes} times`);
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

    playRound()
    if (paper=== 1 || rock=== 1 || scissors === 1){
        winTimes  ++ ;
        console.log(`you won ${winTimes} times`);
    } else if (draw === 1){
        console.log( 'it\'s a draw'); 
    }
    else {
        console.log('you loss');
    }

}



//   pl        comp
//   rock      rock    draw
//   rock      paper   lose
//   rock      scissors win
//   paper    paper   draw
//   paper     rock    win
//   paper     scissors lose
//   scissors scissors draw
//   scissors rock     lose
//   scissors paper   