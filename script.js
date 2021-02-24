









// variable to store and loop through scheduler
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]

// gets data for the header date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

// saves data to localStorage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

// sets any data in localStorage to the view
function displayReminders() {
    myDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }
    

    saveReminders();
    displayReminders();
    console.log(storedDay)
    console.log(myDay)
    // console.log(value)
}

// loads header date
getHeaderDate();

// creates the visuals for the scheduler body
myDay.forEach(function(thisHour) {
    // creates timeblocks row
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    // creates time field
    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // creates schdeduler data
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    // creates save button
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})

// loads any existing localstorage data after components created
init();


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log ($(this));
   
    // console.log
    var saveIndex = $("button.col-md-1.saveBtn").index($(this))
    // var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    console.log(saveIndex);
    console.log(myDay)
    console.log($("#"+saveIndex).val())
    myDay[saveIndex].reminder = $("#"+saveIndex).val()
    console.log(myDay)
    // loads any existing localstorage data after components created
// init();

    saveReminders();
     // loads any existing localstorage data after components created
init();

    displayReminders();
});

// localStorage.get(“my”) 






// // variables for each hour of the day
// var theDay = [
//     {
//         id: "0",
//         hour: "09",
//         time: "09",
//         meridiem: "am",
//         reminder: " "
//     },
//     {
//         id: "1",
//         hour: "10",
//         time: "10",
//         meridiem: "am",
//         reminder: " "
//     },
//     {
//         id: "2",
//         hour: "11",
//         time: "11",
//         meridiem: "am",
//         reminder: " "
//     },
//     {
//         id: "3",
//         hour: "12",
//         time: "12",
//         meridiem: "pm",
//         reminder: " "
//     },
//     {
//         id: "4",
//         hour: "01",
//         time: "13",
//         meridiem: "pm",
//         reminder: " "
//     },
//     {
//         id: "5",
//         hour: "02",
//         time: "14",
//         meridiem: "pm",
//         reminder: " "
//     },
//     {
//         id: "6",
//         hour: "03",
//         time: "15",
//         meridiem: "pm",
//         reminder: " "
//     },
//     {
//         id: "7",
//         hour: "04",
//         time: "16",
//         meridiem: "pm",
//         reminder: " "
//     },
//     {
//         id: "8",
//         hour: "05",
//         time: "17",
//         meridiem: "pm",
//         reminder: " "
//     },
//     ]

//     // saves information to the calendar (localStorage)
// function saveReminders() {
//     localStorage.setItem("theDay", JSON.stringify(theDay));
// }

// // calendar date in header 
// function getHeaderDate() {
//    var currentHeaderDate = moment().format('MMMM, Do, YYYY');
//     $("#currentDay").text(currentHeaderDate);
// }

// // header date
// getHeaderDate();

// // sets any data in localStorage to the view
// function displayReminders() {
//     theDay.forEach(function (_thisHour) {
//         $(`#${_thisHour.id}`).val(_thisHour.reminder);
//     })
// }

// // localstorage data to view 
// function init() {
//     var dayStored = JSON.parse(localStorage.getItem("theDay"));

//     if (dayStored) {
//         theDay = dayStored;
//     } 

//     saveReminders();
//     displayReminders();
// }

// // creates the visuals for the scheduler body
// theDay.forEach(function(thisHour) {
//     // creates timeblocks row
//     var hourRow = $("<form>").attr({
//         "class": "row"
//     });
//     $(".container").append(hourRow);

//     // creates time field
//     var hourbox = $("<div>")
//         .text(`${thisHour.hour}${thisHour.meridiem}`)
//         .attr({
//             "class": "col-md-2 hour"
//     });

//     // data of schedule
//     var hour = $("<div>")
//         .attr({
//             "class": "col-md-9 description p-0"
//         });
//     var data = $("<textarea>");
//     hour.append(data);
//     data.attr("id", thisHour.id);
//     if (thisHour.time < moment().format("HH")) {
//         data.attr ({
//             "class": "past col-md-12", 
//         })
//     } else if (thisHour.time === moment().format("HH")) {
//         data.attr({
//             "class": "present col-md-12"
//         })
//     } else if (thisHour.time > moment().format("HH")) {
//         data.attr({
//             "class": "future col-md-12"
//         })
//     }

//     // save button
//     var saveButton = $("<i class='far fa-save fa-lg'></i>")
//     var save = $("<button>")
//         .attr({
//             "class": "col-md-1 saveBtn"
//     });
//     save.append(saveButton);
//     hourRow.append(hourbox, hour, save);
// })

// // localstorage data for components 
// init();


// // localstorage data saved 
// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();
//     var saveIndex = $(this).siblings(".description").children(".future").attr("id");
//     console.log(saveIndex);
//     theDay[saveIndex] = $(this).siblings(".description").children(".future").val();
//     console.log(theDay);
//     console.log(theDay[saveIndex].reminder);
//     saveReminders();
//     displayReminders();
// })