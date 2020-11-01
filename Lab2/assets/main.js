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
    document.getElementById("clock").innerHTML = day+'/'+month+'/'+year+' | '+hour+':'+minute+':'+second;
    setTimeout("counting()",1000);
}
function displayRadioValue(){
    var ele = document.getElementsByName("ankietaOwoce");
    for(i=0; i<ele.length; i++){
        if(ele[i].checked)
        document.getElementById("result").innerHTML = "Dziękujemy za udział w ankiecie.<br>Twój ulubiony owoc to: "+ele[i].value;
    }
}