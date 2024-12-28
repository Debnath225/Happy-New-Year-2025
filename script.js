const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const getValue = document.getElementById("getValue");
const noEntry = document.getElementById("noEntry");

var countDownDate = new Date("Jan, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
   
    


function onSubmit(){
  const  fVal= fName.value;
    const lVal= lName.value;
    if(fVal == 0 && lVal == 0){
        noEntry.innerHTML="Access denied";
        alert('Happy New Year 2025  please enter your name!');
      return 0;
    }
    else{
        getValue.action="open.html";
        alert(`Happy New Year 2025 ${fVal} ${days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "}`);
    }
}
