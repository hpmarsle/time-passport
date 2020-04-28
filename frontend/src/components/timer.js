class Timer {
    constructor(timer) {
        this.id = timer.id
        this.name = timer.attributes.name;
        this.date = time.attributes.date;
        this.elapsed_time = timer.attributes.elapsed_time;
        this.category = timer.attributes.category;
    }

    renderTimer(){
        let timerCard = document.createElement('div')
        timerCard.classList.add('timer-card')
        timerCard.innerHTML = `<p>${this.name}</p><p>${this.elapsed_time}</p><p>${this.category}</p><p>${this.category_color}</p>`
        let controls = document.createElement('span')
        controls.classList.add('controls')
        controls.innerHTML = "<span class='stopper'>start</span> <span class='reset'>reset</span>"
        timerCard.appendChild(controls)
        return timerCard
    }
    /*
   
    start()

    pause()

    save()


    timer.attributes
    
        // timersContainer.innerHTML = `${this.timers}`
        this.timers.forEach(timer => {
            const div = document.createElement("div")
            div.className = "timer-container"
            
            const ul = document.createElement("ul")
            
            const li = document.createElement("li")
            
            li.innerHTML = Object.keys(timer).map(k => {
                return k.includes('_') ? `<li>${k.split('_').join(' ')}: ${timer[k]}</li>` : `<li>${k}: ${timer[k]}</li>`
                // if (k.includes('_')){
                //     return `<li>${k.split('_').join(' ')}</li>`
                // } else {
                //     return `<li>${k}</li>`
                // }
            }).join('')

            ul.appendChild(li)
            div.appendChild(ul)
            // for (k in timer) {
                // console.log(k, timer[k])
                // let li = document.createElement("li")
                // li.innerHTML = k
                // div.appendChild(li)
            // }
            // Object.keys(timer).map( k => k: )


            // li.innerHTML = + Object.values(timer).join(' ')
            timersContainer.appendChild(div)
            */
}