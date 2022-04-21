
var showCV = false
console.log("WELCOME TO MY FIRST PORTFOLIO")
console.log("THE REAL WEBSITE WILL COME SOON...")

function displayCV(el, language) {
    slideAnimation(el, language)

    var body = document.querySelector("body")
    axios.get(`/${language}`)
        .then((response) => {
            var div = document.createElement("div")
            div.className="content"
            div.innerHTML=response.data
            body.appendChild(div)
        })
        .catch((error) => {
            console.log(error)
        })
}

function slideAnimation(el, language) {
    var chooseLanguage = document.querySelector(".chooseLanguage")
    if(language=="french") {
        document.querySelector("#divBoxEnglish").style.cssText="transition:1s;opacity:0"
    }

    else if(language=="english") {
        document.querySelector("#divBoxFrench").style.cssText="transition:1s;opacity:0"
    }

    el.style.animation='languageChoosed 1s .2s linear infinite forwards'
    chooseLanguage.style.animation='disapearChooseLanguageMenu 1s .7s linear forwards'
    chooseLanguage.addEventListener("animationend", ()=> {
        chooseLanguage.remove()
        showCV=true
    })
}
