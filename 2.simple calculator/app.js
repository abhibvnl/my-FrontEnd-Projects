var store="";
var disp=document.querySelector("#disp")
var res=document.querySelector("#res")

let show=btnValue=>{
    disp.innerHTML=store+=btnValue
};  //arrow show function

let calc=()=>res.innerHTML=eval(store);          //arrow calc function

let clr=()=>{
    var temp=store.slice(0,-1);
    disp.innerHTML=temp;
    store=temp;
}

let allclr=()=>{
    store=""
    disp.innerHTML="";
    res.innerHTML="";
}

      