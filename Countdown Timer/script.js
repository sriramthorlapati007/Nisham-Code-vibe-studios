window.onload = () =>{
    document.querySelector('#start').onclick = start;
    document.querySelector('#reset').onclick = reset;
}

function start (){
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const stop = document.querySelector('#stop');

    const endTime = new Date(date + " " + time);
    const interval = setInterval(() => startTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function startTime(endTime){
    const currentTime = new Date();

    const days = document.querySelector('#Countdown-Days');
    const hours = document.querySelector('#Countdown-Hours');
    const minutes = document.querySelector('#Countdown-Minutes');
    const seconds = document.querySelector('#Countdown-Seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;  

        console.log(timeLeft);
        days.innerText = Math.floor (timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor ((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor ((timeLeft / 60) % 60);
        seconds.innerText = Math.floor (timeLeft % 60);
    } else {
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }

}

function reset() {
    document.querySelector('#Countdown-Days').innerText = 0;
    document.querySelector('#Countdown-Hours').innerText = 0;
    document.querySelector('#Countdown-Minutes').innerText = 0;
    document.querySelector('#Countdown-Seconds').innerText = 0;
}