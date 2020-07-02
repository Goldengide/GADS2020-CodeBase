function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function modify(data) {
    topics = [];
    data.forEach(element => {
        topics.push(element.topic)
    });
    
    topics = shuffle(topics);
    // console.log(topics);
    i=0;
    data.forEach(element => {
        data[i].topic = topics[i];
        ++i;
        // console.log(data.topic);
    });

    return data;

    console.log(data);
}
function display(data) {
    content.innerHTML = null;
    data = modify(data);
    data.forEach(element => {
        //this code is rough, I'd need to adjust it.
        let row, column1, column2, text1, text2;
        row = document.createElement('tr');
        column1 = document.createElement('th');
        text1 = document.createTextNode(element.day);
        text2 = document.createTextNode(element.topic);
        column1.setAttribute("scope", "row");
        column1.setAttribute("style", "width:20%");
        column1.appendChild(text1);
        column2 = document.createElement('td');
        column2.appendChild(text2);
    
        row.appendChild(column1);
        row.appendChild(column2);
        content.appendChild(row);
        // console.log(element.day, "\n");
    });
    // data.length = 0;

}
let data = [
    {
        day: "Monday",
        topic: "New Videos to Post"
    },
    {
        day: "Tuesday",
        topic: "Comment on Excellent Songs"
    },
    {
        day: "Wednesday",
        topic: "Comments on Nigerian, World Wide, Coronavirus news"
    },
    {
        day: "Thursday",
        topic: "Congratulation comments to anybody that earned it"
    },
    {
        day: "Friday",
        topic: "New Quotes either by someone else or the pastor himself"
    },
    {
        day: "Saturday",
        topic: "Announcements"
    },
    {
        day: "Sunday",
        topic: "Invite people to come and join the service,Post links of church videos"
    }
]
let content = document.getElementById('timetable');


times = 0;
setInterval(function() {
    times++;
    if(times < 3) {
        (modify(data));
    }
    display(data);
    
}, 5000);
