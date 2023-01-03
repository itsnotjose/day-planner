// Getting current time and date
let currentDate = new Date();
let currentHour = currentDate.getHours();
//currentHour -= 12;
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = daysOfWeek[currentDate.getDay()];
const currentMonth = currentDate.getMonth() + 1; 
const currentYear = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
//if (currentHour > 12) {
  //currentHour -= 12;
//} else if (currentHour === 0) {
 // currentHour = 12;
//}
// Header display
const currentDayHeader = document.querySelector("#currentDay");
currentDayHeader.textContent = `${currentDay}, ${currentMonth}/${currentDate.getDate()}/${currentYear}    ${currentHour}:${minutes}`;

// color change with current time
const timeBlocks = document.querySelectorAll(".time-block");
timeBlocks.forEach(timeBlock => {
  const hour = parseInt(timeBlock.id.split("-")[1]);
  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else if (hour > currentHour) {
    timeBlock.classList.add("future");
  }
});

// local storage
const saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(saveButton => {
  saveButton.addEventListener("click", () => {
    const textarea = saveButton.previousElementSibling;
    const event = textarea.value;
    const timeBlockId = textarea.parentElement.id;
    localStorage.setItem(timeBlockId, event);
  });
});
timeBlocks.forEach(timeBlock => {
  const event = localStorage.getItem(timeBlock.id);
  if (event) {
   timeBlock.querySelector(".description").value = event;
 }
});
// clear local storage
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
localStorage.clear(); });

