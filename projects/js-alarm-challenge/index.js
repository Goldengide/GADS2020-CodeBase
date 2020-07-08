currentTime = new Date();
console.log(currentTime.getHours());

class Alarm {

    // Code Plan
    // Set next time
    // Set Interval for all the time
    constructor() {
        // this
    }

    showTime() {
        currentTime = new Date();
        document.getElementById('seconds').innerText = currentTime.getSeconds();
        document.getElementById('minutes').innerText = currentTime.getMinutes();
        document.getElementById('hours').innerText = currentTime.getHours();
        let alarms = [
            {
                id: '1',
                label: "Breakfast",
                seconds: 0,
                hours: 8,
                hoursText: "8am",
                src: "../resources/img/alarm/alarmclock.png"
            },
            {
                id: 2,
                label: "Lunch",
                seconds: 0,
                hours: 14,
                hoursText: "2pm",
                src: "../resources/img/alarm/alarm_clock.jpg"
            },
            {
                id: 3,
                label: "Dinner",
                seconds: 0,
                hours: 20,
                hoursText: "8pm",
                src: "../resources/img/alarm/alarm_clock.jpg"
            }
        ];
        alarms.forEach(alarm => {
            if(alarm.hours === currentTime.getHours()) {
                document.getElementById('alarm-image').src = alarm.src;
                document.getElementById('time-moment').innerText = ` ${ alarm.label } : ${alarm.hoursText}`;
            }
        });
            // document.getElementById('alarm-image').src = alarms[1].src;
            // console.log(currentTime.hours());
        
    }

    displayTime() {
        var hours = document.getElementById('hours');
        console.log(hours)
        setInterval(this.showTime.bind(this), 1000)
    };

    setAlarm(time) {
        
    }

    ringAlarm() {}
}

timeObject = new Alarm();
timeObject.displayTime();