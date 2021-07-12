const indic=document.querySelector("h1")
const bdy=document.querySelector("body")
const bg=document.querySelector(".bg")



let i =100
var setInt=setInterval(()=>{

   if(i>=0){
     indic.innerHTML=`${i--} %`;
     bg.style.filter = `blur(${i/10}px)`;
     
   }
   else{
    clearInterval(setInt)
   }
   
},30)
