function restaurer(){
    document.getElementById("time").value = localStorage['time'];
}

function enregistrer(){
    localStorage['time'] = document.getElementById("time").value;
}

if(!localStorage['time']){
    localStorage['time'] = 60;
}

restaurer();
document.getElementById("enregistrer").addEventListener("click", enregistrer);
