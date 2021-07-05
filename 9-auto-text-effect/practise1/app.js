let Msg="We Love Programming";

const h1=document.querySelector("h1") 
const minus=document.querySelector(".fa-minus")
const plus=document.querySelector(".fa-plus")
const speedInd=document.querySelector(".speedIndicator")
const time=document.querySelector("p")

let i=0;
let spd=[1500,1300,1100,900,700,500,400,300,200,100,50];
let j=0;
let set=setTimeout;

let speed=(spd)=> set=setTimeout(m1,spd);
  
let m1=()=>{
  
   h1.innerHTML+=`${Msg[i]}`
   i++;

   if(i==Msg.length+1){
   clearTimeout(set);
   i=0;
   h1.innerHTML=" "
   }
   
   speed(spd[j])  
}

  speed(spd[j]);

   plus.addEventListener("click",()=>{
      if(j>=0 && j<10){
         j++;
         speedInd.innerHTML=`${j}`
         speed(spd[j])
      }
   })

   minus.addEventListener("click",()=>{
      
      if(j>0 && j<=10){
         j--;
         speedInd.innerHTML=`${j}`;
         speed(spd[j]); 
      }
   })

  






