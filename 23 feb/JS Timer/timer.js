let timeRemaining;
let intervalID;

function startTimer(){
    let Hours = Number(document.getElementById('Hours').value);
    let Minutes = Number(document.getElementById('Minutes').value);
    let Seconds = Number(document.getElementById('Seconds').value);

    timeRemaining = Hours * 3600 + Minutes * 60 + Seconds;

    intervalID = setInterval(function(){
        timeRemaining--;

        let hrs = Math.floor(timeRemaining / 3600);
        let min = Math.floor((timeRemaining % 3600) / 60);
        let sec = Math.floor(timeRemaining % 60);

        document.getElementById('Hours').value = hrs;
        document.getElementById('Minutes').value = min;
        document.getElementById('Seconds').value = sec;

        if (timeRemaining <= 0){
            clearInterval(intervalID);
            intervalID = null;
            alert('Time is ended');
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(intervalID);
    intervalID = null;
}

function resetTimer(){
    stopTimer();
    document.getElementById('Hours').value = "";
    document.getElementById('Minutes').value = "";
    document.getElementById('Seconds').value = "";
}
