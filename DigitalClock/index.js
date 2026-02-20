const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');


function DigitalClock(){
    const now = new Date();
    hours.textContent=String(now.getHours()).padStart(2,'0');
    minutes.textContent=String(now.getMinutes()).padStart(2,'0');
    seconds.textContent=String(now.getSeconds()).padStart(2,'0');
}
DigitalClock();
setInterval(DigitalClock,1000);

