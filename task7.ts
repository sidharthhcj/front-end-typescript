let s1=(document.getElementById("text")as HTMLInputElement)
let s2=(document.getElementById("div1")as HTMLDivElement)

s1.addEventListener("input",()=>{
const age=Number(s1.value)

if(!isNaN(age)){
    s2.innerHTML=""
}else{
    s2.innerHTML="error"
}
})