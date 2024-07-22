var mhtxt = document.getElementById("mh");
var ehtxt = document.getElementById("eh");
var options = document.getElementById("buttons");

var mh = 200;
var eh = 500;
var ultdmg = 300;
var evth = document.getElementById("evth");

var normalbutton = document.getElementById("normal");
var chargebutton = document.getElementById("charge");
var ultimatebutton = document.getElementById("ultimate");
var endbutton = document.getElementById("end");

const enemylist = [
    "Ouch, that hurt!",
    "You'll pay for that!",
    "Is that all you've got?",
    "I'll remember this!",
    "You're not as strong as you think you are.",
    "You're going to regret that.",
    "You're not as clever as you think you are.",
    "I'm not impressed by your attack.",
    "You're not as brave as you think you are.",
    "I'm not afraid of you."
];

const mylist = [
    "You're going down!",
    "Take this!",
    "You shouldn't have messed with me!",
    "I'll show you my power!",
    "You're no match for me!",
    "Prepare to meet your maker!",
    "I'll finish you off!",
    "You should have stayed out of this!",
    "You're not worthy to be my enemy!",
    "This is the end for you!"
];



function normal(){
    options.style.display = "none";
    ehtxt.innerHTML = enemylist[Math.floor(Math.random() * enemylist.length)];
    mhtxt.innerHTML = mylist[Math.floor(Math.random() * mylist.length)];
    setTimeout(() => {
        dmgtoopp = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        dmgtome = Math.floor(Math.random() * (70 - 40 + 1) + 40);
        eh -= dmgtoopp;
        mh -= dmgtome;
        mhtxt.innerHTML = "Your health: " + mh;
        ehtxt.innerHTML = "Enemy health: " + eh;
        options.style.display = "block";
    }, 1000);
}


var chargelast = Date.now() - 10000;
function charge(){
    if (Date.now() - chargelast < 10000) {
        chargebutton.innerHTML = "Charged atk (cd: " + (10000 - (Date.now() - chargelast))/1000 + "s)";
        return;
    }
    chargelast = Date.now();
    chargebutton.innerHTML = "Charged atk";
    options.style.display = "none";
    ehtxt.innerHTML = enemylist[Math.floor(Math.random() * enemylist.length)];
    mhtxt.innerHTML = mylist[Math.floor(Math.random() * mylist.length)];
    setTimeout(() => {
        dmgtoopp = Math.floor(Math.random() * (150 - 100 + 1) + 100);
        eh -= dmgtoopp;
        mhtxt.innerHTML = "Your health: " + mh;
        ehtxt.innerHTML = "Enemy health: " + eh;
        options.style.display = "block";
    }, 1000);
}

alreadyused = false;
function ultimate(){
    if(eh <= ultdmg && alreadyused === false){
        alreadyused = true;
        options.style.display = "none";
        ehtxt.innerHTML = enemylist[Math.floor(Math.random() * enemylist.length)];
        mhtxt.innerHTML = "GET F-ED";
        setTimeout(() => {
            dmgtoopp = Math.floor(Math.random() * (300 - 150 + 1) + 150);
            eh -= dmgtoopp;
            mhtxt.innerHTML = "Your health: " + mh;
            ehtxt.innerHTML = "Enemy health: " + eh;
            options.style.display = "block";
        }, 1000);
    } else if(alreadyused === true){
        alert("You've already used the ultimate attack!");
    } else if(eh > ultdmg){
        alert("You need to deal atleast 200dmg!");
    }
}

setInterval(function(){
    if(mh <= 0){
        evth.style.display = "none";
        endbutton.style.display = "block";
    }
    if(eh <= 0){
        evth.style.display = "none";
        endbutton.style.display = "block";
    }
}, 100);
