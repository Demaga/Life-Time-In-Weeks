/*document.getElementById('eventform').reset()




var _init = []; // массив вызываемых функций
var birth = null;
var today = new Date();
var events = {};
var lt = 0;
var longivity = 0;


async function getlifefunc() {
    const getliferesponse = await fetch('http://127.0.0.1:8000/api/getlife');
    const getlifeawait = await getliferesponse.json();
    return getlifeawait;
}


async function getbirthfunc() {
    const getbirthresponse = await fetch('http://127.0.0.1:8000/api/getbirth');
    const getbirthawait = await getbirthresponse.text();
    return getbirthawait;
}


async function geteventsfunc() {
    const geteventsresponse = await fetch('http://127.0.0.1:8000/api/getevents');
    const geteventsawait = await geteventsresponse.json();
    return geteventsawait;
}


getlifefunc().then(res1 => {
    getbirthfunc().then(res2 => {
        birth = res2.split('-');
        birth = new Date(birth[0], birth[1] - 1, birth[2]);

        var lifetime = weekCalculator(today);
        lt = lifetime;

        ageglobal = res1;

        // events
        born = 1;
        today = Math.floor(lifetime);

        var z = 1;
        var container = document.querySelector(".life");
        container.innerHTML = '';
        var test = document.createElement('div');
        test.style.height = '20px';
        test.style.width = '100%';
        container.appendChild(test);
        for (let i=0; i <= ageglobal; i++){
           var year = document.createElement('div');
           year.className = 'years';
           year.style.textAlign = 'center';
           if (i < 10) year.style.marginLeft = '10px';
           var span = document.createElement('span');
           span.style.textAlign = 'left';
           span.innerHTML = i;
           year.appendChild(span);
           for (let j=1; j<=52; j++){
               var cell = document.createElement('a');
               cell.className = 'week';
               cell.href = "#popup1";
               cell.id = z;
               z++;
               cell.onclick = 'tracking(this)';
               year.appendChild(cell);
            }
            container.appendChild(year);
        }

        let i = 0;
        var j = 1;
        var k = 1;
        var corrector = 0;

        //
        while (i < 191) {
            j = 1;
            while (j < 54) {
                if (k < lifetime) {
                    switch (k){
                        case born:
                            document.getElementById(k).className = "week born";
                            break;
                        default:
                            document.getElementById(k).className = "week grey";
                            break;
                    }
                }
                else if (k == lifetime){
                    document.getElementById(k).className = "week green";
                }
                else {
                    document.getElementById(k).className = "week";
                }
                j++;
                k++;
            }
            i++;
            if (corrector == 6) {
                lifetime -= 1;
                corrector = 0;
            }
        
            corrector++;
        }
          

        // login script
        var username = document.getElementById("username");
        var password = document.getElementById("password");
        username.addEventListener("focusout", login_focusout);
        password.addEventListener("focusout", password_focusout);
        var container = document.getElementById("logincont");

        function login(){
            var username = document.getElementById("username");
            var password = document.getElementById("password");
        }

        function login_focusout(){
            if (username.value == "") {
                username.style.border = "1px solid red";
            }
            else {
                username.style.border = "";
            }
        }

        function password_focusout(){
            if (password.value == ""){
                password.style.border = "1px solid red";
            }
            else {
                password.style.border = "";
            }
        }
    })
})



getbirthfunc().then(res => {
    geteventsfunc().then(res2 => {
        getlifefunc().then(res3 => {
            eventslist = [];
        eventsdict = {};

        birth = res;

        for (obj in res2){
            console.log(res2[obj]);
            eventweek = res2[obj]['date'].split('-');
            eventweek = new Date(eventweek[0], eventweek[1] - 1, eventweek[2]);
            eventweek = weekCalculator(eventweek);

            eventsdict[eventweek] = [res2[obj]['title'], res2[obj]['description']];
            eventslist.push(eventweek);
        }

        let i = 0;
        let j = 1;
        let k = 1;
        let corrector = 0;
        let lifetime = res3;
        //
        while (i < 191) {
            j = 1;
            while (j < 54) {
                if (k < lifetime) {
                    if (k in eventslist){
                        document.getElementById(k).className = "week born";
                        continue;
                    }
                    switch (k){
                        case born:
                            document.getElementById(k).className = "week born";
                            break;
                        default:
                            document.getElementById(k).className = "week";
                            break;
                    }
                }
                else if (k == lifetime){
                    document.getElementById(k).className = "week green";
                }
                else {
                    document.getElementById(k).className = "week grey";
                }
                j++;
                k++;}
            i++;
            if (corrector == 6) {
                lifetime -= 1;
                corrector = 0;
            }
        
        corrector++;
        }

        var elements = document.querySelectorAll('.week');
        elements.forEach(function(element, ind) {
            element.addEventListener('click', function(){tracking(this)}, false);
        });

        
        function tracking(obj){
            var objct = parseInt(obj.id);  
            console.log(events); 
            var element = document.getElementById("popup-text");
            switch (objct){
                case 1:
                    element.innerHTML = "Родился";
                    break;
                default:
                    element.innerHTML = "Ничего знаменательного не произошло";
                    break;
            }
            if (objct in eventslist) {
                element.innerHTML = '<h2>'+eventsdict[objct][0]+'</h2><h3>'+eventsdict[objct][1]+'</h3>';
            }
        }

        })       
    })
})
*/



fetch("http://127.0.0.1:8000/api/getevents")
    .then(res => res = res.json())
    .then(res => {
        var events = res;
        console.log(events);
        var len = Object.keys(events).length;

        fetch("http://127.0.0.1:8000/api/getlife")
            .then(res2 => res2 = res2.text())
            .then(res2 => {
                var expectedLifeTime = res2;



                fetch("http://127.0.0.1:8000/api/getbirth")
                    .then(res3 => res3 = res3.text())
                    .then(res3 => {
                        var birth = res3.split('-');
                        birth = new Date(birth[0], birth[1] - 1, birth[2]);

                        var today = new Date();                        
                        var lifetime = weekCalculator(today);

                        var z = 1;
                        var container = document.querySelector(".life");
                        container.innerHTML = '';

                        for (let i=0; i <= 100; i++){
                            var year = document.createElement('div');
                            year.className = 'years';
                            year.style.textAlign = 'center';
                            if (i < 10) year.style.marginLeft = '9px';
                            if (i == 100) year.style.marginLeft = '-9px';
                            var span = document.createElement('span');
                            span.style.textAlign = 'left';
                            span.innerHTML = i;
                            year.appendChild(span);
                            for (let j=1; j<=52; j++){
                                var cell = document.createElement('a');
                                cell.className = 'week';
                                cell.id = z;
                                if (i == Math.floor(expectedLifeTime) && j == 1)
                                    cell.classList.add('death');
                                else if (i >= Math.floor(expectedLifeTime) && j > 0)
                                    cell.classList.add('darkgrey');
                                z++;
                                year.appendChild(cell);
                             }
                             container.appendChild(year);
                        }


                        var eventsObj = [
                            {
                                'week': 1,
                                'title': 'Родился',
                            },
                            {
                                'week': lifetime,
                                'title': 'Сейчас',
                            },
                        ]


                        console.log(eventsObj.length);

                        for (let k=0, i=0; k < len; k++){
                            let date = events[i].date.split('-');
                            date = new Date(date[0], date[1] - 1, date[2]);

                            eventsObj.push({
                                'week': weekCalculator(date),
                                'title': events[i].title,
                            })

                            i++;
                        }

                        console.log(eventsObj);


                        for (let k = 1; k <= lifetime; k++)
                            document.getElementById(k).classList.add('grey');


                        eventsObj.forEach(event => {
                            let week = document.getElementById(event.week);
                            if (event.week == 1)
                                week.classList.add('born');
                            else if (event.week == lifetime)
                                week.classList.add('green');
                            else
                                week.classList.add('blue');
                            week.classList.remove('grey');
                        })



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
                


                        function tracking(obj){
                            var objId = parseInt(obj.id);  
                            var element = document.getElementById("popup-text");
                            var result = eventsObj.filter(object => object.week == objId)
                            if (typeof result[0] !== 'undefined')
                                    element.innerHTML = result[0].title;
                            else if (objId > lifetime)
                                element.innerHTML = 'Этой неделе ещё предстоит сбыться';
                            else 
                                element.innerHTML = 'Ничего знаменательного не произошло';

                            if (objId > Math.floor(expectedLifeTime) * 52 + 1)
                                element.innerHTML = 'Скорее всего, эта неделя никогда не наступит';
                            else if (objId == Math.floor(expectedLifeTime) * 52 + 1)
                                element.innerHTML = 'Ожидаемая дата смерти';
                        }




                        function weekCalculator(date){
                            // To calculate the time difference of two dates 
                            console.log(date);
                            birth = new Date(birth);
                            var differenceInTime = date.getTime() - birth.getTime();

                            // To calculate the no. of weeks between two dates 
                            var differenceInDays = differenceInTime / (1000 * 3600 * 24);
                            var differenceInWeeks = differenceInDays / 7;

                            return Math.floor(Math.abs(differenceInWeeks));
                        }



                    })

            })

})