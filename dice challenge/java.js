var randomNum = Math.floor(Math.random()*6 )+1;

var randomImage = "images/dice"+ randomNum + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage);


var randomNum2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "images/dice" + randomNum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);


if (randomNum>randomNum2) {
    document.querySelector("h1").innerHTML = "player 1 win";
}
else if (randomNum2>randomNum) {
    document.querySelector("h1").innerHTML = "player 2 win";
}
else {
    document.querySelector("h1").innerHTML = "Drow!";
}