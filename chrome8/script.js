if(!localStorage['hello']){
    localStorage['hello'] = 1;
    document.write("Bonjour " + localStorage['nom'] + " pour la première fois");
} else {
    localStorage['hello']++;
    document.writeln("Bonjour " + localStorage['nom'] + " pour la " + localStorage['hello'] + "ème fois");
}

