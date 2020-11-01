// variables for each hour of the day
var theDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: " "
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: " "
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: " "
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: " "
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: " "
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: " "
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: " "
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: " "
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: " "
    },
    ]

    // saves information to the calendar (localStorage)
function saveReminders() {
    localStorage.setItem("theDay", JSON.stringify(theDay));
}

// calendar date in header 
function getHeaderDate() {
   var currentHeaderDate = moment().format('MMMM, Do, YYYY');
    $("#currentDay").text(currentHeaderDate);
}

// header date
getHeaderDate();

// sets any data in localStorage to the view
function displayReminders() {
    theDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// localstorage data to view 
function init() {
    var dayStored = JSON.parse(localStorage.getItem("theDay"));

    if (dayStored) {
        myDay = dayStored;
    }

    saveReminders();
    displayReminders();
}

// creates the visuals for the scheduler body
theDay.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourbox = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // data of schedule
    var hour = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var data = $("<textarea>");
    hour.append(data);
    data.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        data.attr ({
            "class": "past col-md-12", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        data.attr({
            "class": "present col-md-12"
        })
    } else if (thisHour.time > moment().format("HH")) {
        data.attr({
            "class": "future col-md-12"
        })
    }

    // save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var save = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    save.append(saveButton);
    hourRow.append(hourbox, hour, save);
})

// localstorage data for components 
init();


// localstorage data saved 
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    theDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})
