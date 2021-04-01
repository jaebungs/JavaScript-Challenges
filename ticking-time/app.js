const clockContainerEl = document.querySelector('#clock');
const clockEl = document.createElement('div');
// display current hours, minutes and seconds.


function second() {
    setTimeout(()=>{
        clockDisplay()
    }, 1000)
}
// use setInterval! 

function clockDisplay() {
    const time = new Date();
    clockEl.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    clockContainerEl.appendChild(clockEl)
    second()
}

clockDisplay()