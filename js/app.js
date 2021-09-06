//add inputs fields
const centuryInput = document.querySelector("[name='century']");
const yearInput = document.querySelector("[name'year']");
const monthInput = document.querySelector("[name:'month']");
const dayInput = document.querySelector("[name'date']");
const gendersForm = document.querySelector("form#genderform");
const submitButton = document.getElementById("submit")

//add onChange event listeners
centuryInput.addEventListener(
    "change",
    (e) =>(FormData.century = e.target.value)
);
yearInput.addEventListener("change", (e) => (FormData.year = e.target.value));
monthInput.addEventListener(
    "change",
    (e) =>(FormData.month = e.target.value)
);
dayInput.addEventListener("change", (e) => (FormData.day= e.target.value));
gendersForm.addEventListener(
    "change",
    (e) => (FormData.gender =e.target.value)
);

submitButton.addEventListener("click", () => {
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





 
