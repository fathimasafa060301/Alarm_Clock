function updateClock(){
    const now= new Date();
    let hours=now.getHours();
    let mermaids= hours>=12? 'PM': 'AM';
    hours=hours % 12 || 12;
    hours=hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0)
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString= `${hours}:${minutes}:${seconds}:${mermaids}`;
    document.getElementById("clock").textContent= timeString ;   
}
updateClock();
setInterval(updateClock,1000);

function setAlarm(){
    let h= hours.value
    // let mermaids= h>=12? 'PM': 'AM';
    let m= minutes.value;
    setAlarmTime.innerHTML=+h+":"+m+":00";
} 

let checkInterval= setInterval(() => {
    let alarmTime= setAlarmTime.innerHTML;
    alarmTime=alarmTime.split(':')
    let alarmHours=alarmTime[0];
    let alarmMinutes=alarmTime[1];
    let systemTime= new Date();
    let systemHours= systemTime.getHours();
    let systemMinutes= systemTime.getMinutes();
    if (systemHours>12){
        systemHours=systemHours-12;
    }
    if(alarmHours==systemHours && alarmMinutes==systemMinutes){
        alarmImage.src="images/clock.gif";
        alarmSound.play();
        // clearInterval(checkInterval);
    }
}, 1000);