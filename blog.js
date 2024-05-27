/*
window.addEventListener("load", function() {
  showCookieData();
   });

function showCookieData() {
    if (localStorage.getItem("Name:") !== null) {
    let cookietest = "ShowCookieData"
    console.log(cookietest)
    let name = localStorage.getItem("Name:");
    let id = localStorage.getItem("ID:");
    let major = localStorage.getItem("Major");
    let taskName = localStorage.getItem("Taskname:");
    let taskDate = localStorage.getItem("TaskDate:");
    let posttext = localStorage.getItem("Posttext");
    
  
    let cookieData = `Name: ${name}\nID: ${id}\nMajor: ${major}\nTask Name: ${taskName}\nTask Date: ${taskDate}\nPost Text: ${posttext}`;
    document.getElementById("cookie-data").innerText = cookieData;
}
else {
    document.getElementById("cookie-data").innerText = "No Posts Found";
  }
};
*/