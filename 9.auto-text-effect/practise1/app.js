let Msg="We Love Programming";

const h1=document.querySelector("h1") 
const minus=document.querySelector(".fa-minus")
const plus=document.querySelector(".fa-plus")
const speedInd=document.querySelector(".speedIndicator")

let i=0;
let spd=[1100,1000,900,800,700,600,500,400,300,100,50];
let j=1;

let m1=()=>{
  
   h1.innerHTML+=`${Msg[i]}`
   i++;
   if(i==Msg.length+1){
   clearInterval(set);
   i=0;
   h1.innerHTML=" "
   }
   
}
   let set=setInterval;

   let speed=(spd)=>{
     set=setInterval(m1,100);
    }

   speed(1000);

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
         speedInd.innerHTML=`${j}`
         speed(spd[j])
      }
   })

  






