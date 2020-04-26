class Timers {
    constructor() {
        this.timers = [];
        this.adapter = new TimersAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadTimers()
    }

    initBindingsAndEventListeners(){

        this.timersContainer = document.getElementById("timers-container") 
        this.newTimerForm = document.getElementById('new-timer-form')
        this.newTimerInputs = document.getElementsByClassName('new-timer')
        this.newTimerForm.addEventListener('submit', this.createTimer.bind(this))

        
    }

    createTimer(e) {
        e.preventDefault()
        for(let i=0; i < this.newTimerInputs.length; i++){
            console.log(this.newTimerInputs[i].value)
        }
        console.log('note is being created')
    }

    fetchAndLoadTimers() {
        this.adapter.getTimers()
        .then(timers => {
            timers["data"].forEach(timer => {
                this.timers.push(new Timer(timer)) 
                // console.log(timer)
            })
        })
        .then(()=> {
            this.render()
        })
    }

    render() {
        console.log("adding timers to DOM")
        this.makeTimerDivs()
        /*
        1. set inner html OR some kind of function to make each timer in this.timers and append to container

        append each to timer container 

        this.timersContainer.appendChild()
        */
        // }) 
            // console.log(timer.name, timer.category.name))
        // console.log('timers loaded: ', this.timers)
        
        /*
        <div class='timer-card'>
            <ul>
                <li>timer.name</li>
                <li>timer.elapsed_time</li>
                <li>timer.category</li>
                <li>timer.category_color</li>
            </ul>
        </div>
        <div class='timer-card'>

        </div>
        <div class='timer-card'>

        </div> etc.. 
        */
    }
    makeTimerDivs(){
        
        this.timers.forEach(timer => this.timersContainer.appendChild(timer.renderTimer()))

        console.log('div added to container')
    }
}