document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "orange";
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
let emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");
for (let index of emergencyTasks) {
    index.style.backgroundColor = "purple";
}
let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div h3");
for (let index of noEmergencyTasks) {
    index.style.backgroundColor = "black";
}
document.getElementById("footer-container").style.backgroundColor = "darkgreen";