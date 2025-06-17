document.getElementById("check")?.addEventListener("click",()=>{
let s1=(document.getElementById("1")as HTMLInputElement)
let s2=(document.getElementById("2")as HTMLInputElement)

let s3=(document.getElementById("3")as HTMLDivElement)
  s3.innerHTML = "";

if(s1.value!==s2.value){
    let div=document.createElement("div")
div.textContent="not match";
    div.style.color = "red";
s3.appendChild(div)
}

else {
    const div = document.createElement("div");
    div.textContent = "match";
    div.style.color = "green";
    s3.appendChild(div);
  }
})

