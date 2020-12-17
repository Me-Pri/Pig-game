/*This is the program for pig game. 
How to play the game:
1. Click 'Roll the dice' button and the number which appears on the dice
   gets added to the current score of the current player. 
2. To add the score to the global score click 'Hold' button after which 
   the current score gets added to the global score of the current player 
   and the turn to play goes to next player.
3. If number 1 appears on the dice the current score becomes 0 for the current player.
4. The player who gets a score of 20 first is the winner of the game.
*/
var scores , roundScore , activePlayer, gamePlaying = true , tempScores, winScore = 10 ;

function initials()
{
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    tempScores = [0,0];
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    gamePlaying = true;
    winScore = 20;
    
   
}
initials();

//console.log(dice);
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
/*var x = document.querySelector('#score-0').textContent;
console.log(x);
*/


//event handler
//here the event is we will roll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    // this is the list events to be performed 
    if (gamePlaying)
    {
        // Random no
    var dice = Math.floor(Math.random() * 6 ) + 1;
    
    // Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // Update the round score IF the rolled no was NOT a 1 and changing the active player
    if (dice !== 1)
        {
            if (dice === 6 && tempScores[activePlayer === 6])
            {
            scores[activeplayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            activeplayer();
            }
            else
                {
            // add round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }
            
           
        }
    else
        {
            activeplayer();
            
        }
    }
    
    // Make the entire score 0 of the activePlayer if he rolls two 6 in a row
    
    
});
        
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if (gamePlaying)
    {
    // Add current score to global score and save round score in a temporary variable
    scores[activePlayer] += roundScore;
    tempScores[activePlayer] = roundScore;
    //Update the user interface
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check whether the active player is the winner
    if (scores[activePlayer] >=winScore)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
    else
        {
            activeplayer();
        }
    }
    
});
        
function activeplayer()
{
   //change the active player
             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
             roundScore = 0;
            
             document.getElementById('current-0').textContent = '0';
             document.getElementById('current-1').textContent = '0';
             document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active'); 
}
document.querySelector('.btn-new').addEventListener('click',initials);

document.querySelector('.btn-input').addEventListener('click',function(){
    //take the winning score from the user
    winScore = document.getElementById('myInput').value;
});