function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    const meridium = (hours >= 12) ? 'pm' : 'am';
    hours = (hours % 12) ? hours % 12 : 12;
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    const timeString = `${hours}:${minutes}:${seconds}${meridium}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock,500);