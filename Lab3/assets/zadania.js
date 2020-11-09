// Zadnie 1
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
function liczbaLiterTekstu(tekst){
    var liczbaLiter = 0;
    var ele = tekst.split("");
    for(i=0; i<ele.length; i++){
        if(isLetter(ele[i])) liczbaLiter = liczbaLiter+1;
    }
    console.info("Liczba liter: "+liczbaLiter);
}
// Zadanie 2
function sumaTablicy(table){
    var sum = 0;
    for(i=0; i<table.length; i++){
        sum = sum + table[i];
    }
    return sum;
}
// Zadanie 3
function zmiksowanaWielkoscLiter(tekst){
    var tekst2 = "";
    var ele = tekst.split("");
    for(i=0; i<ele.length; i++){
        if(i % 2 == 0) tekst2 = tekst2 + tekst.charAt(i).toUpperCase();
        else tekst2 = tekst2 + tekst.charAt(i).toLowerCase();
    }
    return tekst2;
}
// Zadanie 4
function czyLiczbyIloczyn(liczba1, liczba2){
    if(isNaN(liczba1) || isNaN(liczba2)) return false;
    else return liczba1*liczba2;
}
// Zadanie 5
function imieMiesiace(imie, miesiac){
    miesiac = miesiac.toLowerCase();
    if(miesiac == "grudzień" || miesiac == "styczeń" || miesiac == "luty") return imie + " jeździ na sankach";
    else if(miesiac == "marzec" || miesiac == "kwiecień" || miesiac == "maj") return imie + " chodzi po kałużach";
    else if(miesiac == "czerwiec" || miesiac == "lipiec" || miesiac == "sierpień") return imie + " sie opala";
    else if(miesiac == "wrzesień" || miesiac == "październik" || miesiac == "listopad") return imie + " zbiera liście";
    else return imie + "uczy się JS";
}
// Zadanie 6
function sortowanieImion(tekst, znakRozdzielenia){
    var tekst2 = "";
    tekst = tekst.split(znakRozdzielenia);
    tekst.sort();
    for(i=0; i<(tekst.length -1); i++){
       tekst[i] = tekst[i] + "|";
    }
    for(i=0; i<tekst.length; i++){
        tekst2 = tekst2+tekst[i];
    }
    return tekst2;
}
// Zadanie 7
function tablicaDuzeLitery(tablicaImion){
    for(i=0; i<tablicaImion.length; i++){
        tablicaImion[i] = tablicaImion[i].toUpperCase();
    }
    return tablicaImion;
}
function tablicaZmieszaneLitery(tablicaImion){
    var tablicaImion2 = [];
    tablicaImion2.length = tablicaImion.length;
    for(i=0; i<tablicaImion.length; i++){
        tablicaImion2[i] = "";
        for(j=0; j<tablicaImion[i].length; j++){
            if(j % 2 == 0) tablicaImion2[i] = tablicaImion2[i] + tablicaImion[i].charAt(j).toUpperCase();
            else tablicaImion2[i] = tablicaImion2[i] + tablicaImion[i].charAt(j).toLowerCase();
        }
    }
    return tablicaImion2;
}
// Zadanie 8
function checkFemale(name){
    var lastLetter = (name.length - 1)
    if(name.charAt(lastLetter) == "a") return true;
    else return false;
}
// Zadanie 9
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
function countWomanInTable(arr){
    var females = 0;
    for(i=0; i<arr.length; i++){
        person = arr[i].split(" ")
        if(checkFemale(person[0])) females = females + 1;
    }
    return females;
}