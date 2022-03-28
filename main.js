// Function to change append text content

document.getElementById("myButton").onclick = function() {
    // alert("Hey! How can I help you?")
    document.getElementById("text").innerHTML =   document.getElementById("text").innerHTML + "   " + " How can I help you?" 
}


//Function to Display Content after Clicking on a Button

document.getElementById("myBtn").onclick = function() {
    document.getElementById("heyBoss").style.display = "block";

}

document.getElementById("myBtnn").onclick = function() {
    document.getElementById("heyJess").innerHTML = "You have won a Golden Ticket";

}

// Function to make the circle disappear

document.getElementById("red").onclick = function() {
    document.getElementById("red").style.display = "none";
}

document.getElementById("blue").onclick = function() {
    document.getElementById("blue").style.display = "none";
}
document.getElementById("green").onclick = function() {
    document.getElementById("green").style.display = "none";
}

// Function to change the color of the Circle

document.getElementById("red_").onclick = function() {
    document.getElementById("red_").style.backgroundColor = "green";
}
document.getElementById("blue_").onclick = function() {
    document.getElementById("blue_").style.backgroundColor = "red";
}
document.getElementById("green_").onclick = function() {
    document.getElementById("green_").style.backgroundColor = "blue";
}