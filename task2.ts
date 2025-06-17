let font=12;
document.getElementById("l")?.addEventListener("click",()=>{
    let s=(document.getElementById("p")as HTMLParagraphElement)
    font+=2
    s.style.fontSize=font+"px"

})
document.getElementById("l1")?.addEventListener("click",()=>{
    let s=(document.getElementById("p")as HTMLParagraphElement)
    font-=2
    s.style.fontSize=font+"px"

})