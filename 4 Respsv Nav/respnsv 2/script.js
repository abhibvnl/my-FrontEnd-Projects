//alert("Adjust screen Resolstion below 600* any to feel The effect ")
var newNav=document.querySelector(".newNav");
var icon=document.querySelector(".fas")
let tgl=0;

let toggleMenu=()=>{
   
    if(tgl==0){
        newNav.style.display="block";
        icon.setAttribute("class","fas fa-times")

        tgl=1;
    }
    else{
        newNav.style.display="none";
        icon.setAttribute("class","fas fa-bars")
        tgl=0;
    } 
}

var homePage=document.querySelector(".homePage")
var contactPage=document.querySelector(".contactPage")
var servicePage=document.querySelector(".servicePage")
var loginPage=document.querySelector(".loginPage")

let home=()=>{
    homePage.style.display="block"
    contactPage.style.display="none"
    servicePage.style.display="none"
    loginPage.style.display="none"
    toggleMenu();
 
}
let homeM=()=>{
    homePage.style.display="block"
    contactPage.style.display="none"
    servicePage.style.display="none"
    loginPage.style.display="none"
}

let contact=()=>{
homePage.style.display="none"
contactPage.style.display="block"
servicePage.style.display="none"
loginPage.style.display="none"
toggleMenu();
}

    let contactM=()=>{
    homePage.style.display="none"
     contactPage.style.display="block"
     servicePage.style.display="none"
        loginPage.style.display="none"
    }
       let service=()=>{
        homePage.style.display="none"
        contactPage.style.display="none"
        servicePage.style.display="block"
        loginPage.style.display="none"
        toggleMenu();
        }

         let serviceM=()=>{
            homePage.style.display="none"
            contactPage.style.display="none"
            servicePage.style.display="block"
            loginPage.style.display="none"

            }
            let login=()=>{
                homePage.style.display="none"
                contactPage.style.display="none"
                servicePage.style.display="none"
                loginPage.style.display="block"
                toggleMenu();
                }

                let loginM=()=>{
                    homePage.style.display="none"
                    contactPage.style.display="none"
                    servicePage.style.display="none"
                    loginPage.style.display="block"
                   
                    }