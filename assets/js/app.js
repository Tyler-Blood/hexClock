// allows for future manipulation of clock element from html
var clock = document.getElementById('clock');
// allows for future manipulation of hex-color element from html
var hexColor = document.getElementById('hex-color');


// declare function that will be used to get and update the time as well as the background
function hexClock() {
    // allows the use of the date and time
    var time = new Date();
    // gets the hours and modifies it to 12 hour time
    var hours = (time.getHours() % 12).toString();
    // gets the minutes and sets it to a var
    var minutes = time.getMinutes().toString();
    // gets the seconds and sets it to a var
    var seconds = time.getSeconds().toString();

    // if statements to make sure each number is 2 digits
    // if only one digit is used, the time wouldn't be a valid hex code
    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    // sets the formatting for displaying the time
    var clockStr = hours + ' : ' + minutes + ' . ' + seconds;
    // sets the format for displaying and using the time as a hex color
    var hexColorStr = '#' + hours + minutes + seconds;

    // overwrites the html content inside #clock
    clock.textContent = clockStr;
    // overwrites the html content inside #hex-color
    hexColor.textContent = hexColorStr;

    // changes the background to display the time as a hex color
    document.body.style.backgroundColor = hexColorStr;
}

// call the function so it can be seen as soon as page is loaded
hexClock();
// loops the function to update the clock and background every second
setInterval(hexClock, 1000);
