//ideally I'd like to update this such that
// a) timers auto-delete themselves and their surrounding <section> elements once they elapse
// b) the <section> elements sort in ascending order of time remaining
//
// but that's a future-Nate task

class CountdownTimer {
    constructor({selector, tgtdate}){
	this.selector = selector;
	this.tgtdate = tgtdate;
	this.refs = {
	    days: document.querySelector(`${this.selector} [data-value="days"`),
	    hours: document.querySelector(`${this.selector} [data-value="hours"]`),
	    mins: document.querySelector(`${this.selector} [data-value="minutes"]`)
	};
    }

    timeLeft(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const days = Math.floor(total / 86400000); //msec in day
	const hours = Math.floor( (total / 3600000) % 24 );
	const mins = Math.floor( (total / 60000) % 60 );
	return {days, hours, mins};
    }

    updateTimer({days, hours, mins}){
	this.refs.days.innerHTML = days;
	this.refs.hours.innerHTML = hours;
	this.refs.mins.innerHTML = mins;
    }

    startTimer() {
	const timer = this.timeLeft(this.tgtdate);
	this.updateTimer(timer);
	setInterval(() => {
	    const timer = this.timeLeft(this.tgtdate);
	    this.updateTimer(timer);
	}, 10000);	
    }
}
