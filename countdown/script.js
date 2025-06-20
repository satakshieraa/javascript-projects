/*const startButton = document.getElementById("button");
const timeInput = document.getElementById("timeinput");
const countdownDisplay = document.getElementById("displayparagraph");

function startTimer(){
    let valueInSeconds = parseInt(timeInput.value);

    if(isNaN(valueInSeconds)){
        countdownDisplay.textContent = 'please enter a valid number';
        return; 
    }

    if(valueInSeconds <= 0){
        countdownDisplay.textContent = 'please enter a postivie number';
        return;
    }

    const timer = setInterval(function(){
        valueInSeconds-- ;
        countdownDisplay.textContent = `remaining second ${valueInSeconds}`;

        if(valueInSeconds <= 0){
            clearInterval(timer);
            countdownDisplay.textContent = 'Time up ⏰';
        }
    }, 1000)
}

startButton.addEventListener('click', startTimer )*/


//________________________________________________________________________________________________

const timeInput = document.getElementById('timeinput');
const button = document.getElementById('button');
const paragraph = document.getElementById('displayparagraph');

function startTimer(){
    let valueInSeconds = parseInt(timeInput.value);

    if(isNaN(valueInSeconds)){
        paragraph.textContent = 'please enter a number';
        return
    }

    if(valueInSeconds <= 0){
        paragraph.textContent = 'please a positive number';
        return
    }

    const timer = setInterval(function(){
        valueInSeconds-- ;
        paragraph.textContent = `time remaining ${valueInSeconds}`;
        
        if(valueInSeconds <= 0){
            clearInterval(timer);
            paragraph.textContent = 'time up ⏰'
        }
    }, 1000)
}

button.addEventListener('click', startTimer)