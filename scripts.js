/* Add your JavaScript to this file */

var emailform = function(){
    var entry = document.getElementById("email");
    var emailaddy = document.getElementById("email");
    document.getElementsByClassName("btn")[0].onclick=funtion(d);
        var submission = entry.value;
        var submission = emailaddy.value;
        var empty = "";
        if (entry===empty || entry===null){
            document.getElementsByClassName("message")[0].innerHTML ="Please enter a valid email address.";
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address" + submission +"has been added to our mailing list"
        }
        d.preventDefault();
}

window.onload = emailform;
