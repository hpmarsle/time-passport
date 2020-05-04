class Timers {
    constructor() {
        this.timers = [];
        this.adapter = new TimersAdapter();
        this.initBindings();
        this.fetchAndLoadTimers();
        // this.loadEventListeners();
    }

    initBindings() {
        this.timersContainer = document.getElementById("timers-container") 
        this.newTimerForm = document.getElementById("new-timer-form")    
    }

    createTimer(form) {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                
                "date": form[0].value,
                "name": form[1].value,
                "elapsed_time": "00:00:00",
                "category": form[2].value
            
            })
        }

        this.adapter.postNewTimer(configObj)
        .then(resp =>  {
            console.log('success')
            return resp.json()
        })
        .then(timer => {
            let newTimer = new Timer(timer.data)
            this.timersContainer.appendChild(newTimer.renderTimer())
        })
        .catch(err => {throw err})     
    }
    
    fetchAndLoadTimers() {
        this.adapter.getTimers()
        .then(timers => {
            timers["data"].forEach(timer => {
                this.timers.push(new Timer(timer)) 
            })
        })
        .then(() => {
            this.makeTimerCards()
        }).then(() => {
            this.loadEventListeners()
        })
    }

    deleteTimer(id) {
        fetch(`${this.adapter.baseUrl}/${id}`, {
            method: 'DELETE'
        })
    }

    makeTimerCards(){
        this.timers.forEach(timer => this.timersContainer.appendChild(timer.renderTimer()))
    }

    loadEventListeners() {

        this.newTimerForm.addEventListener('submit', (e) => {
            e.preventDefault()
            this.createTimer(e.target)
        })
        this.timerDisplays = document.querySelectorAll(".timer-display")
        this.stopperButtons = document.getElementsByClassName('stopper');
        this.resetButtons = document.querySelectorAll(".reset")
        this.deleteButtons = document.getElementsByClassName('delete');

        for (const d of this.deleteButtons) {
            d.addEventListener('click', e => {
                const timerCard = e.target.parentElement.parentElement
                this.deleteTimer(timerCard.id)
                timerCard.remove();
            })

        }
        for (const stopper of this.stopperButtons) {
            stopper.addEventListener('click', (e) => {
                if (e.target.innerText === 'start') {
                    e.target.innerText = 'stop'
                    const timerDisplay = e.target.parentElement.parentElement.querySelector('.timer-display')
                    let time = timerDisplay.innerText.split(':')
                    //sidebar this
                    setInterval(() => {
                        let h = time[0]
                        let m = time[1]
                        let s = time[2]

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
                        let newTime = [h, m, s].join(':')
                        timerDisplay.innerText = newTime
                    }, 1000)

                    //   start interval timer.
                } else {
                    e.target.innerText = 'start'
                    //freeze timer
                }
            })
        }
    
        
    }

    toggleStopper() {
        console.log('hit stopper!')
        //after above works turn innerText to stop if start and vv (vice versa)
    }
    
}