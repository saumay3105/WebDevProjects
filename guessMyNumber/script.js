'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.score').textContent = '0'\
*/
let secretNumber= Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30 rem'
        document.querySelector('.number').textContent = secretNumber;
        if(score>highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    } 
    //when guess is wrong..
    else if(guess !== secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = guess > secretNumber ? "Too High": "Too low";
            score--;
            document.querySelector('.score').textContent = score;           
        }else{
            document.querySelector('.message').textContent = "You Lost the game 🥺";
            document.querySelector('.score').textContent = 0;
            
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber= Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector('.number').style.width = '15 rem';
});