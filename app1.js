var scores,roundscore,activePlayer,gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        1. //Random Number

        var dice = Math.floor(Math.random() * 6) + 1;

        2. //Display the Result

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png'

        3. //Update the Score IF the dice rolled is not 1
        if(dice != 1)
        {
            roundscore = roundscore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
        }
        else
        {
            //Next Player
            nextPlayer();

        }


    }

    
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add Current Score to global Score
        scores[activePlayer] += roundscore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        //Check if Player won the game
        if(scores[activePlayer] >= 20)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else
        {
            //Next Player
            nextPlayer();
        }
    }
    
})


function nextPlayer()
{
    //Next Player
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display ='none';
}

document.querySelector('.btn-new').addEventListener('click',init);


function init()
{
    scores = [0,0];
    roundscore = 0;
    activePlayer = 0;
    gamePlaying = true;



    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}






























/*
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice)


var x = document.querySelector('#score-0').textContent;
console.log(x);
*/