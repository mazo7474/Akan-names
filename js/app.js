
//add inputs fields
const akanName = document.querySelector("Akan-name")
const centuryInput = document.querySelector("[name ='century']");
const yearInput = document.querySelector("[name ='year']");
const monthInput = document.querySelector("[name ='month']");
const dayInput = document.querySelector("[name ='date']");
const genderInput = document.querySelector("[name = 'gender']");
const submitButton = document.getElementById("submit")
//add onChange event listeners
centuryInput.querySelector(
    "#formValue",
    (e) =>(FormData.century = e.target.value)
);
yearInput.querySelector("#formValue", (e) => (FormData.year = e.target.value));
monthInput.querySelector("formValue", (e) => (FormData.month = e.target.value));

dayInput.querySelector("#formValue", (e) => (FormData.day= e.target.value));
genderInput.querySelector("#formValue", (e) => (FormData.gender =e.target.value));


submitButton.querySelector("#formValue", () => {
    console.log(FormData);
    console.log(getDayOfTheWeek(FormData));
});
const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const fName = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const mName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

//calculate of the week
function getDayOfTheWeek(data) {
    return newDate(data.century, data.month, data.day).getDayOfTheWeek();
}
if (date) {
    if (document.getElementById("male").checked) {
    akanName.textContent =`Your name in akan is ${mName[date]}.`;
    }
    if (document.getElementById("female").checked) {
    akanName.textContent =`Your name in akan is ${fName[date]}.`;

}};







