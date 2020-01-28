/*// global variable of selected expected lifespan 
var ageglobal = 72.2;

// bind function createcalendar() to button 'createbtn'
document.getElementById('createbtn').addEventListener('click', function(){createcalendar()}, false);

// changes global var ageglobal to some country's data which is fetched from server
function agefunction(e){
	let age = document.getElementById('age');
	let country = e.value;
	let info;
	console.log(country);
	fetch("http://127.0.0.1:8000/countriesdata/")
		.then(res => info = res.json())
		.then(info => {
			let countryage = info[country];
			document.getElementById('age').innerHTML = countryage;
			ageglobal = countryage;
		})
}

// creates calendar with X rows where X = ageglobal
function createcalendar(){
	console.log(ageglobal);
	var k = 1;
	var container = document.querySelector(".life");
	container.innerHTML = '';
	for (var i=1; i <= 100; i++){
		var year = document.createElement('div');
		year.className = 'years';
		if (i < 10) year.style.marginLeft = '10px';
		var span = document.createElement('span');
		span.style.textAlign = 'left';
		span.innerHTML = i;
		if (i == 100) year.style.marginLeft = '-8px';
		year.appendChild(span);
		for (var j=1; j<=52; j++){
			var cell = document.createElement('a');
			cell.className = 'week';
			if (i >= ageglobal) cell.className = 'week grey';
			cell.href = "#popup1";
			cell.id = k;
			k++;
			cell.onclick = 'tracking(this)';
			year.appendChild(cell);
		}
		container.appendChild(year);
	}
}*/