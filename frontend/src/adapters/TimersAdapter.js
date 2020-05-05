class TimersAdapter{
    constructor() {
        this.baseUrl = "http://localhost:3000/api/v1/timers"
    }

    getTimers() {
        return fetch(this.baseUrl)
        .then(res => res.json())
        .catch(error => console.log(error))
    }

    postNewTimer(options) {
        return fetch(this.baseUrl, options)
    }
   
    deleteTimer(id){
        return fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        })
    }
}