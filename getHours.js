//Navodila: kodo kopiraš v konzolo na linku https://allforteam.b-s.si/employee-hours/ , deluje samo za tisti mesec ki je nastavljen trenutno
var divs = document.getElementsByClassName("day-saldo");
var date = document.getElementsByClassName("value");
var sum = 0.0;
var meant = 0.0;
//if(hours) zato da trenutnega dneva ne vzame (da vidim koliko mam bonusa ta mesec brez danes ker se nisem koncal)
for (var i = 0; i < divs.length; i++){
  var div = divs[i].innerHTML;
  if(div != "+0:00"){
    var [hours, mins] = div.split(":");
    if(hours == "+7" || hours == "+8"){
        sum += parseFloat(hours);
        meant += 8;
        if(mins != "00")
            sum += (parseFloat(mins)/60);
      }
    }
}
//console.log(sum);R
var diff = sum - meant;
var hours = parseInt(diff);
var mins = (diff - hours)*60;
console.log("Mesec: " + date[0].innerHTML + " Hours: " + hours + " Mins: " + Math.round(mins));
console.log("Saldo: " + sum);