class Timer {
    constructor(timer) {
        this.id = timer.id
        this.name = timer.attributes.name;
        this.date = timer.attributes.date;
        this.elapsed_time = timer.attributes.elapsed_time;
        this.category = timer.attributes.category;
    }

    renderTimer(){
        let timerCard = document.createElement('div')
        timerCard.classList.add('timer-card')
        timerCard.innerHTML = `
            <p>${this.name}</p><p class='timer-display'>${this.elapsed_time}</p><p>${this.category.name}</p>
        `
        timerCard.style.backgroundColor = `${this.category.key_color}`
        let controls = document.createElement('span')
        controls.classList.add('controls')
        controls.innerHTML = "<button class='stopper'>start</button> <button class='reset'>reset</button>"
        timerCard.appendChild(controls)
        return timerCard
    }
    /*
   
    start()

    pause()

    save()

    */
}