let gameSeq = [];
let userSeq = [];

let btns = ["red","blue","green","yellow"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2")
let para = document.querySelector(".para");

document.addEventListener("keypress", function(){
    if (started==false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function UserFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300)
}



function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;
    para.innerHTML = "";
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(`Button flashed ${randColor}`);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function drpshdw(btn){
    // let btn = this;
    btn.classList.add("drop_shadow"); 
    setTimeout(function(){
        btn.classList.remove("drop_shadow");
    },150)  
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length ==  gameSeq.length) {
           setTimeout (levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! <b>Your score was</b> ${level} </br> Press any key on the <i>keyboard</i> to start.`;
        // document.querySelector("body").style.backgroundColor = "red";
        // setTimeout(function () {
        //     document.querySelector("body").style.backgroundColor = "white";
        // },100);
        reset();
    }
}



function btnPress() {
    let btn = this;
    UserFlash(btn);
    drpshdw(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
    // console.log(this);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level= 0;
}