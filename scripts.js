/* Add your JavaScript to this file */

var emailform = function(){
    const form = document.getElementsByClassName("form-group");
    var entry = document.getElementById("email");
    const emailaddy = document.getElementById("email");


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        checkInput();
    });

    function checkInput(){
        var input = entry.value;
        var empty = "";

        if (entry===empty || entry===null){
            document.getElementsByClassName("message")[0].innerHTML ="Please enter a valid email address.";
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address" + submission +"has been added to our mailing list"
        }
    }
}

window.onload=emailform;