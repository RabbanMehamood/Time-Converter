let minutesEl = document.getElementById("minutesInput");
let hoursEl = document.getElementById("hoursInput");
let convertBtn = document.getElementById("convertBtn");
let errorMsgEl = document.getElementById("errorMsg");
let timeInSecsEl = document.getElementById("timeInSeconds");



let convertToSecs = function() {
    let minutes = parseInt(minutesEl.value);
    let hours = parseInt(hoursEl.value);
    if (minutesEl.value === "" || hoursEl.value === "") {
        errorMsgEl.textContent = "please enter a valid number of hours and minutes";
    } else if (hoursEl.value === "") {
        errorMsgEl.textContent = "please enter a valid number of hours";
    } else if (minutesEl.value === "") {
        errorMsgEl.textContent = "please enter a valid number of minutes";
    } else {
        timeInSecsEl.textContent = (minutes * 60) + (hours * 3600) + "s";
        minutesEl.textContent = "";
        hoursEl.textContent = "";
    }

}

convertBtn.addEventListener("click", convertToSecs);
