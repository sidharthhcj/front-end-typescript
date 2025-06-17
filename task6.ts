let s=(document.querySelector("#sollow")as HTMLSelectElement);
let p=(document.querySelector("#select")as HTMLParagraphElement);

s.addEventListener("change",()=>{
    p.innerHTML=s.value;
})