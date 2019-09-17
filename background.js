/*function animetiddies(){

    //var str = document.forms["stringform"]["sentence"].value;
    var str = document.getElementById('cashmoney').value;

    var string = str.toLowerCase();
    
    var array = string.split("");
    
    for (var i=0; i<array.length; i+=2){
    
         array[i] = array[i].toUpperCase();
    
    var message = array.join('');
         
    }
    
    document.getElementById("PLSBOSS").innerHTML=message;
    
    }
*/

function spongeBob(str){
     var string = str.toLowerCase();
    
     var array = string.split("");
    
     for (var i=0; i<array.length; i+=2){
         array[i] = array[i].toUpperCase();
         var message = array.join('');
    }
    return message;
}