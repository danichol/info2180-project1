/* Add your JavaScript to this file */
var newsletter = function(){
    const email = document.getElementsByID();
    var input = document.getElementById("email");
    var emailaddy = document.getElementById("email");

    addEventListener('submit', (e) =>{
        if (input==="" || input=== null){
            document.getElementByClassName("message")[0].innerHTML ="Please enter a valid email address.";
            e.preventDefault();
        }
        else{
            document.getElementsByClassName("message")[0].innerHTML = "Thank you! Your email address" + enter +"has been added to our mailing list"
        }
      
    }
}

