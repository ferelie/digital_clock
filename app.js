const hourE1 = document.querySelector("#hour");
const minuteE1 = document.querySelector("#minute");
const secondE1 = document.querySelector("#second");
const ampm = document.querySelector("#ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h>12) {
        h = h-12;
        ampm = "PM"
    }

    if (h<10) {
        hourE1.textContent = `0${h}`;
    }
    
    else{
        hourE1.textContent = h;
    }
    
    minuteE1.textContent = m;
    secondE1.textContent = s;

    setTimeout(()=>{
        updateClock();
    })
}

updateClock();