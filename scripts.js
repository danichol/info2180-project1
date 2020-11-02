/* Add your JavaScript to this file */

var emailform = function(){
    var entry = document.getElementById("email");
    var emailaddy = document.getElementById("email");

    document.getElementById("myAnchor").addEventListener("click", function(e){
        e.preventDefault()
      });

    document.getElementsByClassName("btn")[1].function(e);
    var input = entry.value;
    var submission = emailaddy.value;
            if (input==="" || input===null){
                document.getElementsByClassName("message")[0].innerHTML ="Please enter a valid email address.";
            }
            else{
                document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address" + submission +"has been added to our mailing list"
            }
        }


window.onload=emailform;