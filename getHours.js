function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function OpenPage(){
  var target = "_self"
  window.open("https://allforteam.b-s.si/employee-hours/",target);
  
  sleep(2000).then(() => {
    Functionality();
    console.log("EAT ASS");
  });
}

function Functionality(){
  var divs = document.getElementsByClassName("day-saldo");
  var date = document.getElementsByClassName("value");
  var daysToWork = ["pon.","tor.","sre.","čet.","pet."];
  var sum = 0.0;
  var meant = 0.0;
  var workedDays = 0;
  
  for (var i = 0; i < divs.length; i++){
    var div = divs[i].innerHTML;
    if(div != "+0:00"){
      var [hours, mins] = div.split(":");
      if(hours == "+7" || hours == "+8"){
          sum += parseFloat(hours);
          meant += 8;
          workedDays += 1;
          if(mins != "00")
              sum += (parseFloat(mins)/60);
        }
      }
  }
  var diff = sum - meant;
  var hours = parseInt(diff);
  var mins = (diff - hours)*60;
  console.log("Mesec: " + date[0].innerHTML + " Hours: " + hours + " Mins: " + Math.round(mins));
  console.log("Saldo: " + sum);
  
  var daysToWork = ["pon.","tor.","sre.","čet.","pet."];
  var daysInMonth = document.getElementsByClassName("head-1");
  var sumOfDays = 0;
  for (var i = 0; i < daysInMonth.length; i++){
    var day = daysInMonth[i].innerHTML.split(">")[2];
    if(daysToWork.Contains(day)){
      sumOfDays += 1;
       }
  }
  console.log("I have to work for "+sumOfDays+" days this month. Leftover: " + (sumOfDays - workedDays));
}
//OpenPage();
Functionality();