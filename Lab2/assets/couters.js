function counterHTML(element){
    var i =0;
    return function(){ element.innerHTML = ++i;}
}
var cardClicks = document.getElementById("cardClicks");
var cardOvers = document.getElementById("cardMouseOvers");
var counterClicks = document.getElementById("counterClicks");
var counterMouseOvers = document.getElementById("counterMouseOvers");

cardClicks.addEventListener("click",counterHTML(counterClicks));
cardOvers.addEventListener("mouseover",counterHTML(counterMouseOvers));