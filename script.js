const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const getValue = document.getElementById("getValue");
const noEntry = document.getElementById("noEntry");


function onSubmit(){
    if(fName.value==0&&lName.value==0){
        noEntry.innerHTML="Access denied";
        alart('Happy New Year 2025 and please enter your name');
    }
    else{
        getValue.action="open.html";
        alart('Happy New Year 2025');
    }
}
