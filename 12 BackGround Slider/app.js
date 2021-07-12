const slideRight=document.querySelector(".fa-arrow-right");
const slideLeft=document.querySelector(".fa-arrow-left");
const bdy=document.querySelector("body")
const icon=document.querySelector("i")
const image=document.querySelector("img")

let images=[
            'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
            'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80' ,
            'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' ,
            'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80' ,
             'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'       
            ]

  let cnt=0;
  bdy.style.backgroundImage= `url(${images[cnt]})`;
  image.src=`${images[cnt]}`

slideRight.addEventListener('click',() => {
    if(cnt>=0 && cnt<4)
    {
        cnt++;
        bdy.style.backgroundImage= `url(${images[cnt]})`;
        image.src=`${images[cnt]}`
        image.classList.remove("animate")
        setTimeout(addAnime,1000)

      } 
})
slideLeft.addEventListener('click',() => {
    if(cnt>0 && cnt<5)
    { 
        cnt--;
        bdy.style.backgroundImage= `url(${images[cnt]})`;
        image.src=`${images[cnt]}`
        image.classList.remove("animate")
        setTimeout(addAnime,1000)
      } 
})

let addAnime=()=>{
    image.classList.add("animate");
   
}

