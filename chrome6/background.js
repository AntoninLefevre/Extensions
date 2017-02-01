var min = 1;
var max = 4;
var encours = min;

function majicon(){
    chrome.browserAction.setIcon({path: "icon" + encours + ".png"});
    encours++;
    if(encours > max) {
        encours = min;
    }
}

chrome.browserAction.onClicked.addListener(majicon);
majicon();
