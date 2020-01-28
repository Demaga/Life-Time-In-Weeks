var _init = []; // массив вызываемых функцийм
var birth = new Date('03/14/1879');
var death = new Date('04/18/1955');

var requestURL = "data.json";

function weekCalculator(date){
    // To calculate the time difference of two dates 
    console.log(birth);
    var differenceInTime = date.getTime() - birth.getTime();

    // To calculate the no. of weeks between two dates 
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    var differenceInWeeks = differenceInDays / 7;

    return Math.floor(Math.abs(differenceInWeeks));
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


window.onload = function changeClassOn(){
    var ageglobal = 100;
    var z = 1;
    var container = document.querySelector(".life");
    container.innerHTML = '';

    for (var i=1; i <= ageglobal; i++){
        var year = document.createElement('div');
        year.className = 'years';
        year.style.textAlign = 'center';
        var span = document.createElement('span');
        span.style.textAlign = 'left';
        if (i < 10)
           span.innerHTML = '    ' + i;
        else if (i < 100)
            span.innerHTML = '  ' + i;
        else
            span.innerHTML = i;

        year.appendChild(span);
        for (var j=1; j<=52; j++){
            var cell = document.createElement('a');
            cell.className = 'week';
            cell.id = z;
            z++;
            cell.onclick = 'tracking(this)';
            year.appendChild(cell);
        }
        container.appendChild(year);
    }

    var elements = document.querySelectorAll('.week');
      elements.forEach(function(element, ind) {
        element.addEventListener('click', function(){console.log('lel'); 
            var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            var position = element.getBoundingClientRect();
            var overlay = document.querySelector('.overlay');
            overlay.style.position = 'absolute';
            var toppos = scrollTop + position.top;
            overlay.style.top = toppos + 'px'; 
            console.log(position.top);
            overlay.style.left = position.left + 'px'; 
            document.querySelector('.close-popup').classList.add('reveal');
            overlay.classList.add('reveal'); 
            tracking(this);}, false);
      });


    var close = document.querySelector('.close-popup');
    close.addEventListener('click', function(){
        document.querySelector('.close-popup').classList.remove('reveal');
        document.querySelector('.overlay').classList.remove('reveal');
        document.querySelector('.overlay').style.top = '50%'; 
        document.querySelector('.overlay').style.left = '50%';
    })


    var i = 1;
    var j = 1;
    var k = 1;

    //
    while (i < 191) {
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
                        document.getElementById(k).className = "week grey";
                        break;
                }
            }
            else if (k == lifetime){
                document.getElementById(k).className = "week death";
            }
            else {
                document.getElementById(k).className = "week";
            }
            j++;
            k++;}
        i++;}
}

function tracking(obj){
    var objct = parseInt(obj.id);  
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
