const inputBox = document.getElementById("input-box");
const listcont = document.getElementById("list-cont");

function addTask(){
    if(inputBox.value === ''){
        alert("Please write something!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

listcont.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate() {
    localStorage.setItem("data", licont.innerHTML);

}

function showTask() {
    listcont.innerHTML = localStorage.getItem("data");
}
showTask();