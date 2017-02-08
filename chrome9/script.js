if(!localStorage['hello']){
    localStorage['hello'] = 1;
    document.write("Bonjour pour la première fois");
} else {
    localStorage['hello']++;
    document.writeln("Bonjour pour la " + localStorage['hello'] + "ème fois");
}

