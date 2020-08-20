document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#scary-button').addEventListener('click', onclick, false)

    function onclick() {
        let todoInput = document.getElementById("reminder").value


        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            // todoInput is our request parameter in content.js
            chrome.tabs.sendMessage(tabs[0].id, todoInput)
        })
    }
}, false)

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
//         console.log(response.farewell);
//     });
// });