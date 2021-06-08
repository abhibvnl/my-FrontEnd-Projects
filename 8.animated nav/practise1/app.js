const Toggle=document.querySelector(".toggle")
const nav=document.querySelector("#nav")
const icon=document.querySelector("i")

let tog=0;

Toggle.addEventListener("click",()=>{
 nav.classList.toggle("active");
if(tog==0){
icon.setAttribute("class","fas fa-equals toggle")
tog=1;
}
else{
    icon.setAttribute("class","fas fa-times toggle")
    tog=0; 
}
} 
)
