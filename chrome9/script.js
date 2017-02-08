localStorage['timeleft'] = localStorage['time'];

document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";


myInterval = setInterval(function(){
    localStorage['timeleft']--;
    document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";
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
