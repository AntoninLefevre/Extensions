localStorage['timeleft'] = localStorage['time'];

document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";


setInterval(function(){
    if(localStorage['timeleft'] > 0){
    localStorage['timeleft']--;
    document.getElementById("time").innerHTML = "Temps restant: environ " + localStorage['timeleft'] * 60 + " secondes";
    } else {
        monalert();
    }
}, 1000);

function monalert(){
    alert("STOP");
}
