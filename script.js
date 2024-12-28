const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const getValue = document.getElementById("getValue");
const noEntry = document.getElementById("noEntry");


function onSubmit(){
  const  fVal= fName.value;
    const lVal= lName.value;
    if(fVal==0 && lVal==0){
        noEntry.innerHTML="Access denied";
        alert('Happy New Year 2025  please enter your name!');
        return 0;
    }
    elseif(fVal != 0; && lVal != 0;){
        getValue.action="open.html";
        alert('Happy New Year 2025');
    }
}
