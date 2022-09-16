let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let clock = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minute = dateToday.getMinutes();
    let second  = dateToday.getSeconds();

    if (hour < 10){
        hour = `0 ${hour}`;
    }

    if (minute < 10){
        hour = `0 ${minute}`;
    }

    if (second < 10){
        hour = `0 ${second}`;
    }

    hours.textContent = hour;
    minutes.textContent = minute;
    seconds.textContent = second;
})