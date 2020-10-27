function clockCheck(clockVar){
    if(clockVar<10) clockVar="0"+clockVar;
    return clockVar;
}
function counting(){
    var today = new Date();
    var day = today.getDate();
    var month = clockCheck(today.getMonth()+1);
    var year = clockCheck(today.getFullYear());
    var hour = clockCheck(today.getHours());
    var minute = clockCheck(today.getMinutes());
    var second = clockCheck(today.getSeconds());
    document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second;
    setTimeout("counting()",1000);
}