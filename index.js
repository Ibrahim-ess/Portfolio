class Animation {

    constructor() {
        this.néon = false
    }

    launchAnimations() {
        var i = 0
        var speed = [1200, 800, 600, 500, 300, 200, 200, 400, 700, 1200]
        this.néonChange(i, speed) 
    }

    néonChange(i, speed) {
        var header = document.querySelector("header")
        if(i<=10) {
            setTimeout(() => {
                if (this.néon == false) {
                    header.style.textShadow = "0 0 4px rgb(240, 240, 240)"
                    header.style.boxShadow = "rgb(150, 150, 150) 0 0 6px 2px inset, rgb(150, 150, 150) 0 0 6px 2px"
                    this.néon = true
                } 
                else {
                    header.style.textShadow = "";
                    header.style.boxShadow = "";
                    this.néon = false
                }
                i++
                this.néonChange(i, speed)
            },speed[i])
        }
        else {
            header.style.boxShadow = "#646464 0 0 6px 2px inset, #646464 0 0 6px 2px"
            header.style.textShadow = "0 0 4px rgb(200, 200, 200)"
        }
    }
} 

var animation = new Animation()
window.onload=() => {
    setTimeout(() => {animation.launchAnimations()},2500)
}

