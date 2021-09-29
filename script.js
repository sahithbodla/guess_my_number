'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const setMessage = (message) => {
    document.querySelector('.message').textContent = message;
}
const setScore = (score) => {
    document.querySelector('.score').textContent = score;
}
const setHighscore = (highscore) => {
    document.querySelector('.highscore').textContent = highscore;
}
const setSecretNumber = (secretNumber) => {
    document.querySelector('.number').textContent = secretNumber;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if(!guess){
        setMessage("🙊 No Number!");

        // When guess is correct
    } else if(guess === secretNumber) {

        setMessage("🎉 Correct Number!");
        setSecretNumber(secretNumber);
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";

        if(score>highscore) {
            highscore = score;
            setHighscore(highscore);
        }

        // When guess is wrong
    } else {
        if(score>1){
            setMessage(guess>secretNumber?"📈 Too High!":"📉 Too Low!");
            score--;
            setScore(score);
        } else {
            setMessage("😥 You lost the Game!")
            setScore(0)
        }
    } 
});

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    setMessage("Start guessing...");
    setScore(score);
    setSecretNumber("?");
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem"
})