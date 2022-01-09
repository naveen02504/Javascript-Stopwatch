window.onload = function(){

    var seconds = 00;
    var tens = 00;
    var minutes = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var buttonStart =  document.getElementById("button-start")
    var buttonStop = document.getElementById("button-stop")
    var buttonReset = document.getElementById("button-reset")
    var Interval;

    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0"+tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens >99){
            console.log(seconds);
            seconds++;
            appendSeconds.innerHTML = "0"+seconds;
            tens = 00;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds <=9 ){
            appendSeconds,innerHTML = "0"+seconds;
        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        }

        if(seconds >= 60){
            minutes++;
            appendMinutes.innerHTML =  minutes;
            seconds = "00";
            appendSeconds.innerHTML = seconds;
        }

        
    }

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds
        appendMinutes.innerHTML = minutes;
    }
}