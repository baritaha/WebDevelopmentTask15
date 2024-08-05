$(document).ready(function(){
    setInterval(setClock,1000);
    const hourhand=document.querySelector('[data-hour-hand]');
    const minutehand=document.querySelector('[data-minute-hand]');
    const secondhand=document.querySelector('[data-second-hand]');
    const digital=document.getElementById('digital');
    
    
    
    function setClock(){
        const time = new Date();
        digital.innerHTML=`${time.getHours()} :${time.getMinutes()} :${time.getSeconds()}`;
        const seconds = time.getSeconds() /60;
        const minutes = (seconds + time.getMinutes())/60;
        const hours = (minutes + time.getHours())/12;
        setRotation(secondhand,seconds);
        setRotation(minutehand,minutes);
        setRotation(hourhand,hours);
    
    }
    
    function setRotation(element,rotationR){
        element.style.setProperty('--rotation',rotationR * 360 );
    }
    setClock();
})
