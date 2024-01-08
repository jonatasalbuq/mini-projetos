let h = document.querySelector("#h")
let m = document.querySelector("#m")
let s = document.querySelector("#s")
let ms = document.querySelector("#ms")
let startBtn = document.querySelector("#start-btn")
let startImg = startBtn.querySelector("img")
let recordBtn = document.querySelector("#record-btn")
let resetBtn = document.querySelector("#reset-btn")
let records = document.querySelector("#records")
let intervalID
let msTime = 0, sTime = 0, mTime = 0, hTime = 0
let count = 1

function Clock(){
    if(startImg.src.includes("imgs/play-icon-original.svg")){
        startImg.src = "imgs/pause-icon-original.svg"
        intervalID = setInterval(() => {
            if(msTime == 99){
                msTime = 0
                sTime++
                if(sTime == 60){
                    sTime = 0
                    mTime++
                    if(mTime == 60){
                        mTime = 0
                        hTime++
                        if(hTime < 10){
                            h.textContent = `0${hTime}`
                        } else{
                            h.textContent = hTime
                        }
                    }
                    
                    if(mTime < 10){
                        m.textContent = `0${mTime}`
                    } else{
                        m.textContent = mTime
                    }
                }
                
                if(sTime < 10){
                    s.textContent = `0${sTime}`
                } else{
                    s.textContent = sTime
                }
            }
            msTime++
            
            if(msTime < 10){
                ms.textContent = `0${msTime}`
            } else{
                ms.textContent = msTime
            }
        }, 10)
        recordBtn.disabled = false
        recordBtn.style.backgroundColor = "#8E95BF"
    } else{
        startImg.src = "imgs/play-icon-original.svg"
        clearInterval(intervalID)
        recordBtn.disabled = true
        recordBtn.style.backgroundColor = "#8e95bf80"
    }
}

startBtn.addEventListener("click", Clock)

recordBtn.addEventListener("click", () => {
    let recordRow = document.createElement("option")
    let formattedTime = `Volta ${count}: &nbsp;`

    formattedTime += hTime < 10 ? `0${hTime}:` : `${hTime}:`
    formattedTime += mTime < 10 ? `0${mTime}:` : `${mTime}:`
    formattedTime += sTime < 10 ? `0${sTime},` : `${sTime},`
    formattedTime += msTime < 10 ? `0${msTime}` : msTime
    
    recordRow.innerHTML = formattedTime

    records.appendChild(recordRow)
    count++
})

resetBtn.addEventListener("click", () => {
    let opts = records.querySelectorAll("option")

    msTime = 0
    sTime = 0
    mTime = 0
    hTime = 0

    ms.textContent = "00"
    s.textContent = "00"
    m.textContent = "00"
    h.textContent = "00"

    recordBtn.disabled = true
    recordBtn.style.backgroundColor = "#8e95bf80"
    startImg.src = "imgs/play-icon-original.svg"
    clearInterval(intervalID)
    count = 1

    for(let opt of opts){
        records.removeChild(opt)
    }
})