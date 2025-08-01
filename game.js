let gameseq =[];
let userseq =[];
let btns =["red", "yellow", "green", "blue"];
let started = false;
let lvl = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is start");
        started = true;
        lvlUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    document.getElementsByClassName("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 250);
}

function lvlUp(){
    lvl++;
    h2.innerText=`level ${lvl}`;
    userseq=[]; 
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){

    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(lvlUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${lvl}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);

        reset();
    }
}

function btnPress(){
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    lvl = 0;
}