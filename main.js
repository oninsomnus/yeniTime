var countDownYeni = new Date("Oct 31, 2021 23:55:00").getTime();
var countDownKu = new Date("Dec 26, 2021 23:00:00").getTime();
var countDownBek = new Date("Dec 24, 2021 22:22:00").getTime();
var countDownFabi = new Date("Sep 28, 2021 11:00:00").getTime();

var counts = [
    {
    
        "id":"fabi",
        "count":countDownFabi
    },
    {
        "id": "yeni",
        "count":countDownYeni,
    },
    {
    
        "id":"bek",
        "count":countDownBek, 
    }, 
    {
        "id": "ku",
        "count":countDownKu, 
    }
]

var divmain = document.querySelector(".main")

for (var count of counts){
    let newElement = document.createElement('p');
    newElement.setAttribute('id', count.id);
    divmain.appendChild(newElement);

    //var parrafo = document.querySelector("#" + count.id);
    let llegadatxt = document.createElement('p');
    if(count.id == 'fabi'){
        llegadatxt.textContent = '🎓🥳 La verdadera last signature 🥳🎓'
    } else {
        llegadatxt.textContent = 'Llegada de ' + count.id.charAt(0).toUpperCase() + count.id.slice(1);
    }
    divmain.appendChild(llegadatxt);
}

function countdownf(x){
    for (var count of x){
        var now = new Date().getTime();
        
        var distance = count.count - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(count.id).innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0 && countDownFabi != 946702800000) {
            clearInterval(count);
            document.getElementById(count.id).innerHTML = count.id.charAt(0).toUpperCase() + count.id.slice(1) + " llegó!";
        } else if (countDownFabi == 946702800000) {
            document.getElementById('fabi').innerHTML = '🤷‍♂️'
        }
    }
}

function countdownReal(x){
    setInterval(function () {
        countdownf(x)
    }, 1000);
}

countdownReal(counts);

//BACK

var wwid = window.innerWidth;

if(wwid <= 964 && wwid >= 678){

new Vivus('main', { 
  duration: 100,
  file: './img/newbackXS.svg',
  start: 'autostart', 
  animTimingFunction: Vivus.EASE
});

}

if(wwid > 964){

new Vivus('main', { 
  duration: 100,
  file: './img/newbackXS.svg',
  start: 'autostart', 
  animTimingFunction: Vivus.EASE
});

}

if(wwid >= 300 && wwid <= 677){

	new Vivus('main', { 
	  duration: 100,
	  file: './img/newbackXXS.svg',
	  start: 'autostart', 
	  animTimingFunction: Vivus.EASE
	});

}