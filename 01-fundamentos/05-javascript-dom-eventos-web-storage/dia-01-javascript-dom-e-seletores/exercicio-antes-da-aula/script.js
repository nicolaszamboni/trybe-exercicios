const header = document.getElementById("header-container");
header.style.backgroundColor = "green";

const noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.backgroundColor = "yellow";

const noEmergencyHeader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyHeader.length; index += 1){
noEmergencyHeader[index].style.backgroundColor = "black";
}

const emergency = document.getElementsByClassName("emergency-tasks")[0];
emergency.style.backgroundColor = "pink";

const emergencyHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyHeader.length; index += 1){
emergencyHeader[index].style.backgroundColor = "purple";
}

const trybe = document.getElementById('footer-container');
trybe.style.backgroundColor = "green";

// const emergencyHeader = () => {
//     let emergency = document.querySelectorAll('.emergency-tasks h3');
//     for (let index = 0; index < emergency.length; index += 1) {
//         emergency[index].style.backgroundColor = "purple";
//     }
//     }
//     emergencyHeader();

// const noEmergencyHeader = () => {
//     let noEmergency = document.querySelectorAll('.no-emergency-tasks h3');
//     for (let index = 0; index < noEmergency.length; index += 1) {
//         noEmergency[index].style.backgroundColor = "black";
//     }
//     }
//     noEmergencyHeader();