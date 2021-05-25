
function Myclk() {
    var dt = new Date();
    var h1=document.getElementById("time");
    var days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
   
    var day=dt.getDay();
    var h=dt.getHours();
    var m=dt.getMinutes();
    var s=dt.getSeconds();
    //console.log(`${day} : ${h} : ${m} :${s}`);
    s=h>12 ? s +" pm" : s + " am" ;
    h=h>=12 ? h-12 : h ;
    var clk=`${days[day]} : ${h} : ${m} :${s}`;
    h1.innerHTML=clk;                 //innertexr,or textcontent
     //hello//g
   }
   setInterval(Myclk,1000);
   
