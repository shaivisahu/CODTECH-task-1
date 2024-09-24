let inputBox = document.getElementById("input-box");
let listContaine = document.getElementById("list-containe");


function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        listContaine.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML = "&#x2717;";
       li.appendChild(span);
        
    }
    inputBox.value = "";
    saveData();
}
listContaine.addEventListener("click",function(e){
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
 }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
 }
},false);

function saveData(){
    localStorage.setItem("data",listContaine.innerHTML);
}
function showTask(){
     listContaine.innerHTML = localStorage.getItem("data") ;
}
showTask();