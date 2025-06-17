let s=((document.getElementById("box"))as HTMLButtonElement)
function toggle(){
  document.getElementById("k")?.addEventListener("click",()=>{
   s.classList.toggle("active")
      
    })
}
toggle();