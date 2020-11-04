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
        var ele = document.getElementsByClassName("btn");
        for(i=0; i<ele.length; i++){
            ele[i].classList.add("btn-dark")
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
        var ele = document.getElementsByClassName("btn");
        for(i=0; i<ele.length; i++){
            ele[i].classList.remove("btn-dark")
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
function helloWorld(){
    var t = document.createTextNode("Hello World! ");
    document.getElementById("cardHelloWorld").appendChild(t);
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
function colorChange(){
    var ele = document.getElementsByName("colorRadio");
    for(i=0; i<ele.length; i++){
        if(ele[i].checked) 
        document.getElementById("colorBlock").style.backgroundColor = ele[i].value;
    }
}
function hide(){
    let x = document.getElementById("cardHelloWorld");
    x.style.visibility = "hidden";
}
function stickyClock(){
    document.getElementById("cardClock").classList.add("sticky-top");
}
function menuLeft(){
    var x = document.getElementsByClassName("order-md-2")
    x[0].classList.remove("order-md-2");
}
function textColor(){
    var x = document.getElementById("colorInput").value;
    document.body.style.color = x;
}
function italic(){
    document.body.style.fontStyle = "italic";
}
function warningButton(){
    var ele = document.getElementsByClassName("btn");
    for(i=0; i<ele.length; i++){
        ele[i].classList.remove("btn-dark")
        ele[i].classList.add("btn-warning")
   }
}
function putOnTop(){
    document.getElementById("cardPutOnTop").style.position = "relative";
    document.getElementById("cardPutOnTop").style.top = "-140px";
}
function battle(){
    var battle = new Date(1410,6,15);
    var today = new Date();
    var diffrence = Math.floor((today-battle)/1000/60/60/24/365);
    document.getElementById("battleResult").innerHTML = "Od Bitwy pod Grunwaldem do dziś minęło "+diffrence+" lat";
}
function drawNumber(){
    var number = function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    var t = document.createTextNode(number(0,10)+" ");
    document.getElementById("cardRandom").appendChild(t);
}