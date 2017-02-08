function restaurer(){
    document.getElementById("nom").value = localStorage['nom']
}

function enregistrer(){
    console.log("test");
    localStorage['nom'] = document.getElementById("nom").value;
}

restaurer();
document.getElementById("enregistrer").addEventListener("click", enregistrer);
