class Timers {
    constructor() {
        this.timers = [];
        this.adapter = new TimersAdapter();
        this.initBindings();
        this.fetchAndLoadTimers();
        this.loadEventListeners();
    }

    initBindings() {

        this.timersContainer = document.getElementById("timers-container") 
        this.newTimerForm = document.getElementById('new-timer-form')
        this.timerDisplays = document.querySelectorAll('.timer-display')
        this.stopperButtons = document.querySelectorAll('.stopper')
        
    }

    loadEventListeners() {
        this.newTimerForm.addEventListener('submit', (e) => {
            e.preventDefault()
            this.createTimer(e.target)
        })
        /*
        this.timerDisplays.addEventListener('click', e => console.log('clicked!')) 
        when start button is clicked change display of timer to count up set interval 1000 */
        ``
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
        })
    }

    makeTimerCards(){
        
        this.timers.forEach(timer => this.timersContainer.appendChild(timer.renderTimer()))

        console.log('div added to container')
    }
}