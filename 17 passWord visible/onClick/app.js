var inp=document.querySelector("input")
var value=0;

let view=()=>{
    if(value==0){
        inp.type="text" ;
        value=1;
    }
    
    else{
        inp.type="password";
        value=0;
    }
    

}




