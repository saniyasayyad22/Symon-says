let gameseq=[];
let userseq=[];
let col=["pink","orange","green","blue"];
let start=false;
let level=0;
let totalscore=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
      console.log("game started");
      start=true;
    }
    levelup();
});
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcol=col[randidx];
    randbtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    btnflash(randbtn);
   
}
function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash")
  },250);
}
let btns=document.querySelectorAll(".box");
for(btn of btns){
  btn.addEventListener("click",function(){
    let flashbtn=this;
    let useridx=flashbtn.getAttribute("id");
    userseq.push(useridx);
    btnflash(flashbtn);
    checkbtn(userseq.length-1);
  })
}
function checkbtn(idx){
  if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup,1000);
    }
  }
  else{
    
    h3.innerHTML=`Game over , Your score is <b>${level-1}</b> <br> press any key to start the game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor="white";
    }, 150);
    
    reset();
  }
}

function reset(){

  totalscore=totalscore+(level-1);
  let h4=document.querySelector("h4");
  h4.innerText=`Total Score : ${totalscore}`;
  start=false;
  gameseq=[];
  userseq=[];
  level=0;
}