const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function setDate() {
    const now = new Date();

    const getSec = now.getSeconds();
    const getMin = now.getMinutes();
    const getHour = now.getHours();

    const secDeg = (getSec / 60) * 360;
    const minDeg = (getMin / 60) * 360;
    const hourDeg = (getHour / 12) * 360;

    sec.style.transform = `rotate(${secDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);

setInterval(showDigital, 1000);

function showDigital() {
    const time = new Date();
    let hourDigit = time.getHours();
    let minDigit = time.getMinutes();
    let secDigit = time.getSeconds();
    am_pm = "AM";
    if (hourDigit > 12) {
        hourDigit -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hourDigit = 0;
        am_pm = "AM";
    }
    hourDigit = hourDigit < 10 ? `0 ${hourDigit}` : hourDigit;
    minDigit = minDigit < 10 ? `0 ${minDigit}` : minDigit;
    secDigit = secDigit < 10 ? `0 ${secDigit}` : secDigit;

    let currentTime = `${hourDigit} : ${minDigit} : ${secDigit} ${am_pm}`;

    document.getElementById("digiClock").innerHTML = currentTime;
    document.getElementById("digiClock").textContent = currentTime;
}
showDigital();