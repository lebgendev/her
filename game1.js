var game2button = document.getElementById("game2but");

compchoices = ["rock", "paper", "scissors"];

function rps(urchoice){

    var compchoice = compchoices[Math.floor(Math.random()*3)];
    if(urchoice == compchoice){
        alert("It's a tie! Try Again!");

    }else if(urchoice == "rock" && compchoice == "scissors"){
        alert("you won! mwah");
        game2button.style.display = "block";
    }else if(urchoice == "paper" && compchoice == "rock"){
        alert("Yayy you won!");
        game2button.style.display = "block";
    }else if(urchoice == "scissors" && compchoice == "paper"){
        alert("You win baby!");
        game2button.style.display = "block";
    }else{
        alert("owh you lost baby, try again");
    }

}


function rock(){
    rps("rock");
}

function paper(){
    rps("paper");
}

function sci(){
    rps("scissors");
}