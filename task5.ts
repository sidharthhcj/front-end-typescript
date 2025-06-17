let text=(document.getElementById("post")as HTMLTextAreaElement)
let span=(document.getElementById("char")as HTMLSpanElement)
let div=(document.getElementById("msg")as HTMLDivElement)

text.addEventListener("input",()=>{
   let length=text.value.length

   if(length>200){
    div.innerHTML=`charcter limit`
   }else{
    div.innerHTML=""
   }
})