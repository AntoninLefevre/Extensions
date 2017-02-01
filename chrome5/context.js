var clickHandler = function(e){
    alert("Click !!!");
};

chrome.contextMenus.create({
    "title": "Cliquez moi...",
    "contexts": ["link"],
    "onclick": clickHandler
});
