const currentDate = new Date();
const daysDisplay = document.getElementById("DayLastModified");
if (!localStorage.getItem("dayLastModified")){
    localStorage.setItem("dayLastModified", currentDate.getMonth() + 1 + "/" + currentDate.getDate() + "/" + currentDate.getFullYear());
    daysDisplay.textContent = localStorage.getItem("dayLastModified");
} else {
    const lastModified = localStorage.getItem("dayLastModified");
    daysDisplay.textContent = lastModified;
    localStorage.setItem("dayLastModified", currentDate.getMonth() + 1 + "/" + currentDate.getDate() + "/" + currentDate.getFullYear());
}
