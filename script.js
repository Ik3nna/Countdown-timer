const timeSection = document.querySelector(".time-section");

const section = document.querySelectorAll(".time-section div");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 2, 10, 30, 0);

const futureTime = futureDate.getTime();

function getRemainingTime () {
    const today = new Date().getTime();
    const t = futureTime - today;

    // important things to note
    // 1s = 1000ms
    //  1m = 60s
    //  1hr = 60m
    //  1 day = 24hrs

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format (item) {
        if (item < 10) {
           return `0${item}`;
        } else {
            return item;
        }
    }
    
    section.forEach(function (sec, index) {
        sec.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        timeSection.innerHTML = `<h2 class="expired">We've launched!!!</h2>`
    }
}

    let countdown = setInterval(getRemainingTime, 1000);

    getRemainingTime();