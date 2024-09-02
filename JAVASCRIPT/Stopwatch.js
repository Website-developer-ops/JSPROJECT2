
const displays = document.querySelectorAll(".display");
const hrs24Btn = document.getElementById("24HrsBtn");
const hrs12Btn = document.getElementById("12HrsBtn");
const buttons = document.querySelectorAll("button");
const times = document.querySelectorAll(".time");
const dates = document.querySelectorAll(".dates");

let date;
setInterval(()=> {
    date = new Date();
}, 1000);

function hideDisplays(){
    displays.forEach((element)=>{
        element.style.display = "none";
    });   
}

function hideTimesBtn(){
    times.forEach((element) => {
        element.style.display = "none";
    });
}

function hideDatesBtn(){
    dates.forEach(element => {
        element.style.display = "none";
    });
}

hideDisplays();

function getFullYear(){
    return date.getFullYear();
}

function getMonth(){
    return date.getMonth() + 1;
}

function getDate(){
    return date.getDate();
}

function getDay(){
    let day = date.getDay();
    day = Number(day);

    switch(day){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "";
            break;
    }

    return day;
}



function getHours(){
    return date.getHours();
}

function getMinutes(){
    return date.getMinutes();
}

function getSeconds(){
    return date.getSeconds();
}

function system1(){
    let hours = getHours();
    let minutes = getMinutes();
    let seconds = getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    const time = `${hours}:${minutes}:${seconds} Hrs`;

    displays[0].textContent = time;
}

function system2(){
    let hours = getHours();
    let minutes = getMinutes();
    let seconds = getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours > 12 ? hours % 12 : hours;

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;

    displays[1].textContent = time;
}

function system3(){
    let year = getFullYear();
    let month = getMonth();
    let dates = getDate();
    let day = getDay();

    year = formatTime(year);
    month = formatTime(month);
    dates = formatTime(dates);

    const datess = `${dates}/${month}/${year} ${day}`;

    displays[2].textContent = datess;
}

function system4(){
    let year = getFullYear();
    let month = getMonth();
    let dates = getDate();

    year = formatTime(year);
    month = formatTime(month);
    dates = formatTime(dates);

    const datess = `${dates}/${month}/${year}`;

    displays[3].textContent = datess;
}


hrs24Btn.onclick = function(){
    setInterval(system1, 10);
    hideDisplays();
    hrs24Btn.style.display = "none";
    hrs12Btn.style.display = "block";
    displays[0].style.display = "block";

}

hrs12Btn.onclick = function(){
    setInterval(system2, 10);
    hideDisplays();
    hrs12Btn.style.display = "none";
    hrs24Btn.style.display = "block";
    displays[1].style.display = "block";
}

dates[0].onclick = function(){
    hideDisplays()
    hideDatesBtn();
    system3();
    displays[2].style.display = "block";
    dates[1].style.display = "block";
}

dates[1].onclick = function(){
    hideDisplays();
    hideDatesBtn();
    system4();

    displays[3].style.display = "block";
    dates[0].style.display = "block";
}

function formatTime(number){
    number = number.toString().padStart(2, 0);
    return number;
}

// 0729002589

