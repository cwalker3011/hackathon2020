// Once we hit button, function inside addListener performs
chrome.runtime.onMessage.addListener(function (request) {

    if (request) {
        //  alert first
        alert(`No problemo! We'll remind you to: ${request} 😊`)

        setTimeout(function () {
            let pageContent = document.querySelector("body")

            let divs = document.querySelectorAll('div')

            divs.forEach((el) => {
                el.parentNode.removeChild(el)
            })

            let newText = document.createElement('header');
            let text = document.createTextNode(`GO ${request.toUpperCase()}!`)
            newText.appendChild(text)
            pageContent.appendChild(newText);
            newText.style.fontSize = "100px"
            newText.style.textAlign = "center"

            let image = document.createElement("img")
            image.src = "https://media.giphy.com/media/WKqwoSJsHlxba/giphy.gif"
            pageContent.appendChild(image);
            image.style.width = "100%";
            image.style.height = "100%"


            let ac = 'nmh_scream1.mp3'
            let url = chrome.runtime.getURL(ac);
            let a = new Audio(url)
            a.play()


        }, 6000)

    }
})