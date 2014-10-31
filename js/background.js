chrome.browserAction.onClicked.addListener(function(tab) {
    showResponsiveFrames(tab);
});

function showResponsiveFrames(tab){
    // To create a new tab
    chrome.tabs.create({url:chrome.extension.getURL("responsive_frames.html")}, function(new_tab){
         // Send a message with this tab's url
        chrome.tabs.sendMessage(new_tab.id, {greeting: tab.url}, function(response) {
            // console.log(response.farewell);
        });
    });
}

/* *** Snipets *** */

// To duplicate the clicked tab
// chrome.tabs.getSelected(null,function(tab) {
//  chrome.tabs.create({url:tab.url});
// });
