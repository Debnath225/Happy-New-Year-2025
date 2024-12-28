const fName = document.getElementById("fName");

const lName = document.getElementById("lName");

const getValue = document.getElementById("getValue");
const noEntry = document.getElementById("noEntry");


function onSubmit(){
    if(fName.value==0&&lName.value==0){
        noEntry.innerHTML="Access denied";
        return 0;
    }
    else{
        getValue.action="open.html";

    }
}
