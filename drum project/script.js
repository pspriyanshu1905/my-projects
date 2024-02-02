// detectiong button press
var buttonclick = document.querySelectorAll(".drum").length;

for (var i=0; i < buttonclick; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickMe );

    function clickMe(){ 

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    
}
}

// detecting key press 

document.addEventListener("keypress", function(event){
    makesound(event.key);
});

function makesound (key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();   
            break;

    
        default:
            alert("this is't right key");
            break;

    }
}