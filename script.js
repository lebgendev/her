var txt = document.getElementById("text");
var button = document.getElementById("but");
var game1button = document.getElementById("game1but");
var i = 0;

function changeTxt(){
    switch(i){
        case 0:
            txt.innerHTML = "Sorry your gift took a bit too long";
            i++;
            break;
        case 1:
            txt.innerHTML = "I was saving for a project (millions rly)";
            i++;
            break;
        case 2:
            txt.innerHTML = "I'll make sure your birthday gift is perfect tho";
            i++;
            break;
        case 3:
            txt.innerHTML = "so I prepared some games for you";
            i++;
            break;
        case 4:
            txt.innerHTML = "And you'll get the prize at the end! yay";
            i++;
            break;
        case 5:
            txt.remove();
            button.remove();
            game1button.style.display = "block";
        
    }
}

