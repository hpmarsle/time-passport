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
        timerCard.setAttribute('id', `${this.id}`)
        timerCard.innerHTML = `
            <p>${this.name}</p><p class='timer-display'>${this.elapsed_time}</p><p>${this.category.name}</p>
        `
        timerCard.style.backgroundColor = `${this.category.key_color}`
        let controls = document.createElement('span')
        controls.classList.add('controls')
        controls.innerHTML = "<button class='stopper'>start</button> <button class='reset'>reset</button> <button class='delete'>delete</button>"
        timerCard.appendChild(controls)
        return timerCard
    }
    //sidebar this
    static start(timeArr) {
        let h = parseInt(timeArr[0])
        let m = parseInt(timeArr[1])
        let s = parseInt(timeArr[2])
        
        s++;
        if (s == 60){
            s = 0
            m++

            if (m == 60) {
                m = 0
                h++
            }
        }
        h = ('00' + h.toString()).substr(-2);
        m = ('00' + m.toString()).substr(-2);
        s = ('00' + s.toString()).substr(-2);
        let newTime = [h, m, s]
        return newTime
    }
    
/*
    pause()

    save()

    */
} 