const body = document.querySelector("body");
// Inputs
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const colorInput = document.getElementById("color");
const greeting = document.getElementById("greeting");
const todayDate = document.getElementById("todayDate");
const count = document.getElementById("count");

// Buttons
const createBtn = document.getElementById("createBtn");
const themeBtn = document.getElementById("themeBtn");
const hideBtn = document.getElementById("hideBtn");
const resetBtn = document.getElementById("resetBtn");

// Profile Card
const profileCard = document.getElementById("profileCard");

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displaySubject = document.getElementById("displaySubject");
createBtn.addEventListener("click", function () {

    if (
        nameInput.value === "" ||
        ageInput.value === "" ||
        subjectInput.value === "" ||
        colorInput.value === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    displayName.textContent = "Name: " + nameInput.value;
    displayAge.textContent = "Age: " + ageInput.value;
    displaySubject.textContent = "Subject: " + subjectInput.value;

    profileCard.style.backgroundColor = colorInput.value;
// Greeting
let hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning, " + nameInput.value + "!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon, " + nameInput.value + "!";
} else {
    greeting.textContent = "Good Evening, " + nameInput.value + "!";
}

// Today's Date
todayDate.textContent = "Date: " + new Date().toLocaleDateString();
});
hideBtn.addEventListener("click", function () {

    if (profileCard.style.display === "none") {
        profileCard.style.display = "block";
        hideBtn.textContent = "Hide Profile";
    } else {
        profileCard.style.display = "none";
        hideBtn.textContent = "Show Profile";
    }

});
themeBtn.addEventListener("click", function () {

    body.classList.toggle("dark-mode");

});
resetBtn.addEventListener("click", function () {

    nameInput.value = "";
    ageInput.value = "";
    subjectInput.value = "";
    colorInput.value = "";

    displayName.textContent = "Name :";
    displayAge.textContent = "Age :";
    displaySubject.textContent = "Subject :";

    profileCard.style.backgroundColor = "white";
    profileCard.style.display = "block";

    hideBtn.textContent = "Hide Profile";
    greeting.textContent = "";
    todayDate.textContent = "";
    count.textContent = "Characters: 0";

});
nameInput.addEventListener("input", function () {

    count.textContent = "Characters: " + nameInput.value.length;

});