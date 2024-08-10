const secondeHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() % 60;
    const minutes = date.getMinutes() % 60;
    const hours = date.getHours() % 12;
    console.log(secondeHand, minuteHand, hourHand);
    rotateClockHand(secondeHand, seconds / 60);
    rotateClockHand(minuteHand, (minutes + seconds / 60) / 60);
    rotateClockHand(hourHand, (hours + minutes / 60) / 12);
    console.log(seconds, minutes, hours);
}

function rotateClockHand(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval(clockTick, 1000);