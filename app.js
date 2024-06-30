let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winmodel=document.querySelector(".win-model");
let winner=document.querySelector(".winner");
let loosemodel=document.querySelector(".loss-model");
let looser=document.querySelector(".looser");
let tiemodel=document.querySelector(".tie-model");
let tie=document.querySelector(".tie");
console.log(computer);
let play1=document.querySelector(".play");
let play2=document.querySelector(".play2");
let play3=document.querySelector(".play3");
let play4=document.querySelector(".play4");
let play5=document.querySelector(".play5");
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score1=JSON.parse(localStorage.getItem("sc1"));
let scoreElem=document.getElementById("monu1");
let score2=JSON.parse(localStorage.getItem("sc2"));
let score2Elem=document.getElementById("monu2");
let rulebtn=document.querySelector(".btn-rule");
let rulemodel=document.querySelector(".rule-model");
let ruleimage=document.querySelector(".rule-image");
let nextenable=document.getElementById("nextEnable");

if(score2){
    score2Elem.innerText=score2;
}
let countt=0;
if(score1){
     scoreElem.innerText=score1;
}
let count=0;


con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item => {
           item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show");
        setTimeout(()=>{
        machine.style.opacity="1";
          setTimeout(()=>{
           computer[random].style.display="block";
           computer[random].classList.add("right");
          },500);
          setTimeout(()=>{
            if(index==random){
                tiemodel.style.display="grid";
                tie.innerText="TIE UP"; 
                nextEnable.style.display="none";
            }
            else if(index===0 && random==1 || index==1 && random==2|| index==2 && random==0){
             winmodel.style.display="grid";
             winner.innerText="YOU WIN";
             nextEnable.style.display = "grid";
             nextEnable.addEventListener("click",()=>{
                window.open('http://127.0.0.1:5500/cong.html');
            });
            
             countt=score2;
             countt++;
             score2Elem.innerText=countt;
             localStorage.setItem("sc2",JSON.stringify(countt));
             element.classList.add("highlight-green");
            }
            else{
             loosemodel.style.display="grid";
             looser.innerText="YOU LOST";
             nextEnable.style.display="none";
             count=score1;
             count++;
             scoreElem.innerText=count;
             localStorage.setItem("sc1",JSON.stringify(count));
             computer[random].classList.add("highlight-green");
            }
          },1000);
        },500);
    })
    
});
play1.addEventListener("click",()=>{
    window.location.reload();
})
play2.addEventListener("click",()=>{
    window.location.reload();
})
play3.addEventListener("click",()=>{
    window.location.reload();
})
rulebtn.addEventListener("click",()=>{
    rulemodel.style.display="flex";
    setTimeout(()=>{
     ruleimage.style.transform="translateY(0)";
    },400);

})
let close=document.querySelector(".close");
close.addEventListener("click",()=>{
    ruleimage.style.transform="translateY(-200%)"; 
    setTimeout(()=>{
        rulemodel.style.display="none";
    },400);

})

 
