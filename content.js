// Once we hit button, function inside addListener performs
chrome.runtime.onMessage.addListener(function(request) {
    let obj = {}
    obj['input'] = request;
    console.log(obj)
    
    if (request) {
        let body = document.querySelector("*")
            body.remove();
            // reminder pops up

            // audio and backgound black out next, reminder disappears
        setTimeout(function (){

            let audio = new Audio('nmh_scream1.mp3');
            document.appendChild(audio);
            let played = document.querySelector('audio').play();
        }, 10000)
        
    }
})