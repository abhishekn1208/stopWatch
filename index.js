let Timer = document.getElementById("timer")
let start = document.getElementById("strBTN")
let stp = document.getElementById("stpBTN")
let reset = document.getElementById("rstBTN")

let timeInterval;
let timerValue = 0;
let isRunning = false;



function displayUpdate(){
    let hours = Math.floor(timerValue/3600);
    let minutes = Math.floor((timerValue%3600)/60);
    let seconds = Math.floor(timerValue%60);
    Timer.textContent = `${hours < 10 ? 0: ""}${hours}:${minutes <10?0:""}${minutes}:${seconds <10?0:""}${seconds} `
}





function startTimer(){
    if(!isRunning){
      timeInterval = setInterval(()=>{
        timerValue++;
        displayUpdate();
 
      },1000)

    }
}
function stopTimer(){
    clearInterval(timeInterval);
    displayUpdate();
   
}

function resetTimer(){
    timerValue=0;
    displayUpdate()
}


start.addEventListener("click",startTimer);
reset.addEventListener("click",resetTimer);
stp.addEventListener("click",stopTimer)