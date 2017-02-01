function recherche(tabId, changeInfo, tab){
    if(tab.url.indexOf("hello") >= 0){
        chrome.pageAction.show(tabId);
    }
}

chrome.tabs.onUpdated.addListener(recherche);
