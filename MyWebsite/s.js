function changeTextColor() {    
       var myColor = prompt("What color for the text") 
        document.body.style.color = myColor;
}


function welcomeMessage()
{
    var name = prompt("what is your name");
    var message = "<h1>Hello " + name + "&#x263A<?h1>";
    document.getElementById("line1").innerHTML = message;
}