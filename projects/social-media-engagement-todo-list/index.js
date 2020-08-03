

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







class DynamicTable {

    //clone the table preset then set an enum
    // if table has been initiated, add new table if not replace the table
    constructor(data) {
        this.data = data;
    }

    shuffle(data) {
        var currentIndex = data.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = data[currentIndex];
            data[currentIndex] = data[randomIndex];
            data[randomIndex] = temporaryValue;
        }
    
        return data;
    }

    modify(data) {
        let topics = [];
        data.forEach(element => {
            topics.push(element.topic)
        });
        
        topics = this.shuffle(topics);
        let i=0;
        data.forEach(element => {
            data[i].topic = topics[i];
            ++i;
        });
        this.data =data;
    
        return data;
    
    }
    display() {
        let content = document.getElementById('timetable');
        content.innerHTML = null;
        data = this.modify(this.data);
        data.forEach(element => {
            let row, column1, column2, text1, text2;
            row = document.createElement('tr');
            column1 = document.createElement('th');
            text1 = document.createTextNode(element.day);
            text2 = document.createTextNode(element.topic);
            column1.setAttribute("scope", "row");
            column1.setAttribute("style", "width:10%");
            column1.appendChild(text1);
            column2 = document.createElement('td');
            column2.appendChild(text2);
        
            row.appendChild(column1);
            row.appendChild(column2);
            content.appendChild(row);
        });
    
    }

    

    
}

  
    
test = new DynamicTable(data);
test.display();
setInterval(function() {
    test.display();
}, 3600000);
// test.display();
