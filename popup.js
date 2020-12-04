
var tabJustCreated;
var etiime;
var info_name;
var info_point;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('apply').addEventListener('click', function () {
        etiime = document.getElementById('etiime').value;
        info_name = document.getElementById('info_name').value;
        info_point = document.getElementById('info_point').value;
        chrome.windows.create({
            url: 'http://xih5.hljtv.com:80/exam/result.php?etiime=' + etiime,
            width: 522,
            height: 1160,
            type: 'popup'
        }, function (window) {
            tabJustCreated = window.tabs[0].id;
        });
    });
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
        if (changeInfo.status == 'complete' && tabId == tabJustCreated) {
            chrome.tabs.executeScript(tabId, {
                code: 'document.getElementById("info_name").innerText="' + info_name + '";document.getElementById("info_point").innerText="' + info_point + '";'
            });
        }
    });
});
