let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["red","yellow","green","purple"];

h2=document.querySelector('h2');

document.addEventListener('keypress', function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
        document.querySelector('body').style.backgroundColor="white";
    }  
})


function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },150);
}

function userFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },150);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    randIdx=Math.floor(Math.random()*3);
    randColor=btns[randIdx];
    randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText=`Game Over! Your score is ${level }. Press any key to start the game`;
        document.querySelector('body').style.backgroundColor="red";
        reset();
        }
}
function btnPress(){
    let btn=this;

    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}


let buttons=document.querySelectorAll('.btn');
for(btn of buttons){
    btn.addEventListener("click", btnPress)
}

function reset(){
    gameSeq=[];
    started=false;
    level=0;
    userSeq=[];
}