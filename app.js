let gameseq = [];
let userseq = [];
let color = ["red","yellow","green","blue"];
let h2 = document.querySelector('h2');

let gamestarted = false;
let level =0; 

document.addEventListener("keypress",function(){
  if(gamestarted == false){
    console.log("game started");
    gamestarted = true;
    levelup();
  }
});

function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },200);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },200);
}

function levelup(){
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let idx = Math.floor(Math.random()*3);
  let randcolor = color[idx];
  let rand = document.querySelector(`.${randcolor}`);
  // console.log(rand);
  btnflash(rand);
  gameseq.push(randcolor);
  console.log(gameseq);
}
let h3 = document.querySelector("h3");
let maxi = 0;
function checkans(idx){
  if(userseq[idx] === gameseq[idx]){
    if(gameseq.length === userseq.length){
      setTimeout(levelup(),1000);
    }
  }else{
    maxi = Math.max(maxi,level);
    h3.innerHTML = `Maximum Score is <b>${maxi}</b>`;
    h2.innerHTML = `Game Over! your score is <b>${level}</b> </br> press any to start the game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },250);
    reset();
  }
}

function btnpress(){
  // console.log(this);
  let btn = this
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  // console.log(userseq);
  checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}

function reset(){
  gameseq = [];
  userseq = [];
  gamestarted = false;
  level = 0;
}
