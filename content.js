// Once we hit button, function inside addListener performs
chrome.runtime.onMessage.addListener(function (request) {

    if (request) {
        //  alert first
        alert(`No problemo! We'll remind you to: ${request}`)

        setTimeout(function () {
            let pageContent = document.querySelector("body")

            let divs = document.querySelectorAll('div')

            divs.forEach((el) => {
                el.parentNode.removeChild(el)
            })

            let newText = document.createElement('header');
            let text = document.createTextNode(`GO DO: ${request.toUpperCase()}!!`)
            newText.appendChild(text)
            pageContent.appendChild(newText);
            newText.style.fontSize = "200px"
            newText.style.textAlign = "center"

            let image = document.createElement("img")
            image.src = "https://media.giphy.com/media/WKqwoSJsHlxba/giphy.gif"
            pageContent.appendChild(image);
            image.style.textAlign = "center"

            let audio = document.createElement("AUDIO")
            audio.src = "nmh_scream1.mp3"
            pageContent.appendChild(audio)
            audio.autoPlay = true;


        }, 2000)

    }
})