function classesAdd(){
    document.querySelectorAll("h2").forEach(function(el){el.classList.add('card-title')});
    Array.from(document.getElementsByClassName("card")).forEach(function(el){el.classList.add("mb-2")});
    Array.from(document.getElementsByClassName("list-group-item")).forEach(function(el){el.classList.add("list-group-item-action")});
}
function dragPhotoEvent(){
    document.getElementById("cardDrag").appendChild(document.createTextNode("Zostaw to!"));
    document.getElementById("backgroundPhoto").removeEventListener("drag",dragPhotoEvent);
}
function addColorListeners(){
    document.addEventListener("keypress", backgroundColorBlue);
    document.addEventListener("keyup",backgroundColorGrey);
}
function backgroundColorBlue(){
    document.body.style.background = "LightBlue";
    document.removeEventListener("keypress", backgroundColorBlue);
}
function backgroundColorGrey(){
    document.body.style.background = "LightSlateGrey";
    document.removeEventListener("keyup",backgroundColorGrey);
    document.addEventListener("keydown", backgroundColorWhite);
}
function backgroundColorWhite(){
    document.body.style.background = "white";
}
function scrollEvent(){
    document.body.style.color = "blue";
}
function selectChange(){
    document.getElementById("fruitSelectOutput").innerHTML = "Twój ulubiony owoc to: "+document.getElementById("fruitSelect").value;
}
function inputEvent(){
    document.getElementById("textOutput").innerHTML = document.getElementById("textInput").value;
}
function copyEvent(){
    document.getElementById("copyWarning").innerHTML = "Pamiętaj że plagiat jest nielegalny!";
    document.getElementById("cardCopy").classList.add("warning");
}
document.addEventListener("wheel", scrollEvent);
document.addEventListener("input",scrollEvent);
document.addEventListener("copy",copyEvent);