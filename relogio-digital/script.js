setInterval(() => {
    let now = new Date()
    let currentHours = now.getHours()
    let currentMinutes = now.getMinutes()
    let currentSeconds = now.getSeconds()
    let body = document.querySelector("body")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")

    
    if (currentHours >= 6 && currentHours < 9){
        body.style.backgroundImage = "url(img/amanhecer.jpg)"
    } else if (currentHours >= 9 && currentHours < 17){
        body.style.backgroundImage = "url(img/dia.jpg)"
    } else if (currentHours >= 17 && currentHours < 19){
        body.style.backgroundImage = "url(img/anoitecer.jpg)"
    } else{
        body.style.backgroundImage = "url(img/noite.jpg)"
    }

    if(currentHours < 10){
        currentHours = "0" + currentHours
    }

    if(currentMinutes < 10){
        currentMinutes = "0" + currentMinutes
    }

    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds
    }

    hours.innerHTML = currentHours
    minutes.innerHTML = currentMinutes
    seconds.innerHTML = currentSeconds 
})