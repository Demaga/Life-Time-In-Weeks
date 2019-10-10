var _init = []; // массив вызываемых функцийм
var birth = new Date('03/14/1879');
var death = new Date('04/18/1955');

var requestURL = "data.json";

function weekCalculator(date){
    // To calculate the time difference of two dates 
    var differenceInTime = date.getTime() - birth.getTime();

    // To calculate the no. of weeks between two dates 
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    var differenceInWeeks = differenceInDays / 7;

    return Math.round(Math.abs(differenceInWeeks));
}

var lifetime = weekCalculator(death);

// events
born = 1;
movedToMunich = weekCalculator(new Date('06/15/1880'));
littleEinsteinPhoto = weekCalculator(new Date('04/13/1882'));
familyMovedToItale = weekCalculator(new Date("07/16/1894"));
movedToItaly = weekCalculator(new Date("12/01/1894"));
discoveredOwnProofOfPifagoreanTheorem = weekCalculator(new Date("03/13/1902"));
startedCalculus = weekCalculator(new Date("03/13/1891"));
readKantWorks = weekCalculator(new Date("05/15/1892"));
masteredCalculus = weekCalculator(new Date('08/21/1893'));
death = Math.floor(lifetime);



function changeClass() {
    document.getElementById('myButton').className = "changedClass";
    var button_class = document.getElementById('myButton').className;
    document.getElementById('myPara').innerHTML = "New class name: "
        + button_class;
}

window.onload = function changeClassOn(){
    var i = 1;
    var j = 1;
    var k = 1;

    //
    while (i < 90) {
        j = 1;
        while (j < 53) {
            if (k < lifetime) {
                switch (k){
                    case born:
                        document.getElementById(k).className = "week born";
                        break;
                    case movedToMunich:
                        document.getElementById(k).className = "week blue";
                        break;
                    case littleEinsteinPhoto:
                        document.getElementById(k).className = "week blue";
                        break;
                    case movedToItaly:
                        document.getElementById(k).className = "week blue";
                        break;
                    case discoveredOwnProofOfPifagoreanTheorem:
                        document.getElementById(k).className = "week blue";
                        break;
                    case readKantWorks:
                        document.getElementById(k).className = "week blue";
                        break;
                    case masteredCalculus:
                        document.getElementById(k).className = "week blue";
                        break;
                    default:
                        document.getElementById(k).className = "week";
                        break;
                }
            }
            else if (k == lifetime){
                document.getElementById(k).className = "week death";
            }
            else {
                document.getElementById(k).className = "week grey";
            }
            j++;
            k++;}
        i++;}
}

function tracking(obj){
    var objct = parseInt(obj.id);  
    console.log(objct);  
    var element = document.getElementById("popup-text");
        switch (objct){
            case 1:
                element.innerHTML = "Родился";
                break;
            case movedToMunich:
                element.innerHTML = "Переехал в Мюнхен";
                break;
            case littleEinsteinPhoto:
                element.innerHTML = "Эйнштейн в юношестве";
                break;
            case movedToItaly:
                element.innerHTML = "Переехал в Италию";
                break;
            case discoveredOwnProofOfPifagoreanTheorem:
                element.innerHTML = "Придумал ещё один способ доказательства Теоремы Пифагора, свой собственный.";
                break;
            case readKantWorks:
                element.innerHTML = "Прочёл философские работы Канта";
                break;
            case masteredCalculus:
                element.innerHTML = "В совершенстве овладел матанализом";
                break;
            case death:
                element.innerHTML = "Умер от аневризмы аорты";
                break;
            default:
                element.innerHTML = "Ничего знаменательного не произошло";
                break;
            }
}


function display_table(){
    var element = document.getElementById("displaytable")
    if (element.style.display === "none")
        element.style.display="inline-block";
    else
        element.style.display="none";
}

//window.onload = function () {
//    for (var i in _init) {
//        if (typeof (_init[i]) == 'function') _init[i](); // вызываем подряд //все функции из _init
//    }
//
//}

//_init.push(changeClassOn); // загоняем в _init нужные функции
