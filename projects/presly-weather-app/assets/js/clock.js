currentTime = new Date();
console.log(currentTime.getHours());
function normalize(digit) {
    digit = '' + digit;
    if(digit.length == 1) {
        digit = '0' + digit;
    }
    return digit;
}


    function showTime() {
        currentTime = new Date();
        document.getElementById('sec').innerText = normalize(currentTime.getSeconds());
        document.getElementById('min').innerText = normalize(currentTime.getMinutes());
        document.getElementById('hour').innerText = normalize(currentTime.getHours());
            // document.getElementById('alarm-image').src = alarms[1].src;
            // console.log(currentTime.hours());
        
    }

    function displayTime() {
        setInterval(showTime.bind(this), 1000)
    };


displayTime();