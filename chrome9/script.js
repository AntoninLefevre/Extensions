document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";

myInterval = setInterval(function(){
    document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";
    if(localStorage['timeleft'] < 0) {
        clearInterval(myInterval);
    }
}, 1000);

myInterval;
