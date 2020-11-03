function chceckingTime(){
    var today = new Date();
    var hour = today.getHours();
    if(hour>=18 || hour<=6) document.getElementById("lightSwitch").checked = "true";
}
function turningLight(){
    if(document.getElementById("lightSwitch").checked){
        document.body.classList.add("nightMode");
        document.getElementById("lightSwitchLabel").innerHTML = "Wyłącz tryb nocny";
        var ele = document.getElementsByClassName("card");
        for(i=0; i<ele.length; i++){
            ele[i].classList.add("bg-secondary")
        }
        var ele = document.getElementsByClassName("list-group-item");
        for(i=0; i<ele.length; i++){
            ele[i].classList.add("list-group-item-dark")
        }
    } 
    else{
        document.body.classList.remove("nightMode")
        document.getElementById("lightSwitchLabel").innerHTML = "Włącz tryb nocny"
        var ele = document.getElementsByClassName("card");
        for(i=0; i<ele.length; i++){
            ele[i].classList.remove("bg-secondary")
        }
        var ele = document.getElementsByClassName("list-group-item");
        for(i=0; i<ele.length; i++){
            ele[i].classList.remove("list-group-item-dark")
        }
    }
}
function clockCheck(clockVar){
    if(clockVar<10) clockVar="0"+clockVar;
    return clockVar;
}
function counting(){
    var today = new Date();
    var day = clockCheck(today.getDate());
    var month = clockCheck(today.getMonth()+1);
    var year = today.getFullYear();
    var hour =clockCheck(today.getHours());
    var minute = clockCheck(today.getMinutes());
    var second = clockCheck(today.getSeconds());
    document.getElementById("cardClock").innerHTML = day+'/'+month+'/'+year+' | '+hour+':'+minute+':'+second;
    setTimeout("counting()",1000);
}
function displayRadioValue(){
    var ele = document.getElementsByName("ankietaOwoce");
    for(i=0; i<ele.length; i++){
        if(ele[i].checked)
        document.getElementById("result").innerHTML = "Dziękujemy za udział w ankiecie.<br>Twój ulubiony owoc to: "+ele[i].value;
    }
}
function changePhoto(){
    document.getElementById("backgroundPhoto").src = "./images/ufo.jpg";
}
var clicks =0;
document.getElementById("cardClicks").addEventListener("click", addOne);
function addOne(){
    clicks = ++clicks;
    document.getElementById("cardClicks").innerHTML = clicks;
}