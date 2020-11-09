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
    document.addEventListener("keydown", addListeners);
}
function addListeners(){
    document.removeEventListener("keydown", addListeners);
    document.addEventListener("keypress", backgroundColorBlue);
    document.addEventListener("keyup",backgroundColorGrey);
}