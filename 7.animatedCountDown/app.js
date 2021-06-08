const h1=document.querySelector("h1")
const button=document.querySelector("button")
const p=document.querySelector("p")

    let start=()=>{
   
        
        var cnt=3
        h1.style.animationPlayState="running";
        button.style.visibility="hidden" 
        p.innerHTML="Get Ready"
       
            var set=setInterval(()=>{  
                h1.innerHTML=`${cnt--}`
                if(cnt==`-1`){
                h1.innerHTML=`Go`;
                clearInterval(set)
                button.style.visibility="visible"
                p.innerHTML=" "
            }   
        },1000)
    }
    
  ///  start();
  






