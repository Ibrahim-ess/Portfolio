class Animation {

    constructor() {
        this.néon = false
    }

    launchAnimations() {
        var i = 0
        var speed = [1200, 800, 600, 500, 300, 200, 200, 400, 700, 1200]
        this.neonChange(i, speed) 
    }

    neonChange(i, speed) {
        var header = document.querySelector("header")
        if(i<=10) {
            setTimeout(() => {
                if (this.néon == false) {
                    header.style.textShadow = "0 0 10px rgb(240, 240, 240)"
                    header.style.boxShadow = "rgb(200, 200, 200) 0 0 6px 2px inset, rgb(200, 200, 200) 0 0 6px 2px"
                    this.néon = true
                } 
                else {
                    header.style.textShadow = "";
                    header.style.boxShadow = "";
                    this.néon = false
                }
                i++
                this.neonChange(i, speed)
            },speed[i])
        }
        else {
            header.style.boxShadow = "#646464 0 0 6px 2px inset, #646464 0 0 6px 2px"
            header.style.textShadow = "0 0 4px rgb(200, 200, 200)"
            header.style.transition = "all .3s"

            header.addEventListener('mousemove', () => this.neonOn(header))
            header.addEventListener('mouseout', () => this.neonOff(header))
        }
    }

    neonOn(element) {
        element.style.textShadow = "0 0 10px rgb(240, 240, 240)"
        element.style.boxShadow = "rgb(200, 200, 200) 0 0 6px 2px inset, rgb(200, 200, 200) 0 0 6px 2px"
    }

    neonOff(element){
        element.style.boxShadow = "#646464 0 0 6px 2px inset, #646464 0 0 6px 2px"
        element.style.textShadow = "0 0 4px rgb(200, 200, 200)"
    }

    hideHostAdvertise() {
        if (document.querySelector("body").children[2]) {
            var ad = document.querySelector("body")
            ad.children[2].remove()
        }
    }
} 


var animation = new Animation()
var interval = setInterval(()=> {
    if(showCV) {
        animation.hideHostAdvertise()
        animation.launchAnimations()
        clearInterval(interval)
    } 
},500)



