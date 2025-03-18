//calculator program


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value =+ input;
}


function clearDisplay(){
    document.getElementById("display").value = "";

   
    
}

function calculate(){
    try{
          document.getElementById("display").value =eval(document.getElementById("display").value);
    }
    catch(error){
        document.getElementById("display").value ="Error";
    }
}
