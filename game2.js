var qna1 = document.getElementById("qna1");
var qna2 = document.getElementById("qna2");
var qna3 = document.getElementById("qna3");
var qna4 = document.getElementById("qna4");
var qna5 = document.getElementById("qna5");
var i = 0;

var game3button = document.getElementById("game3but");

function ans1(){
    qna1.style.display = "none";
    qna2.style.display = "block";
    i++;
}
function ans2(){
    qna2.style.display = "none";
    qna3.style.display = "block";
    i++;
}
function ans3(){
    qna3.style.display = "none";
    qna4.style.display = "block";
    i++;
}
function ans4(){
    qna4.style.display = "none";
    qna5.style.display = "block";
    i++;
}
function ans5(){
    qna5.style.display = "none";
    game3button.style.display = "block";
    i++;
}

function lose(){
    list = ["Awwww, you messed up! Try again",
            "Oh no! You didn't choose the right one!",
            "Ouch! You got it wrong!",
            "Bummer! You should have chosen the other one!",
            "Aww, you were so close! But not close enough!",
            "You failed! But don't worry, you can try again!",
            "Oh dear! You didn't quite make it!",
            "Sorry! You got it all wrong!"];
    alert(list[Math.floor(Math.random() * list.length)]);
}