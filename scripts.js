/* Add your JavaScript to this file */

var emailform = function(){
    var entry = document.getElementById("email");
   
    document.getElementsByClassName("btn")[1].addEventListener("click", function(e){
    var submission = entry.value;
    
            if (submission==="" || submission===null){
                document.getElementsByClassName("message")[0].innerHTML ="Please enter a valid email address.";
            }

            else{
                document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address " + submission +" has been added to our mailing list"
            }

            e.preventDefault();})
        }    

window.onload=emailform;