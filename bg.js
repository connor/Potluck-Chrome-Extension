chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, { code: "(function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//www.potluck.it/assets/bookmarklet.m.js');document.body.appendChild(e)})();" });
});