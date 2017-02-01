chrome.omnibox.onInputChanged.addListener(function(text, suggest){
    suggest([
        {content: text + "un", description: "Description 1"},
        {content: text + "deux", description: "Description 2"}
    ]);
});

chrome.omnibox.onInputEntered.addListener(function(text){
    alert("Vous avez tapé '" + text + "'");
});
