localStorage['timeleft'] = localStorage['time'];

myInterval = setInterval(function(){
    localStorage['timeleft']--;
    if(localStorage['timeleft'] < 0) {
        monalert();
        clearInterval(myInterval);
    }
}, 1000);

myInterval;

function monalert(){
    alert("Stop !!!");
    setInterval(monalert(), 500);
}
