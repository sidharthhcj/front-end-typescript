function handle(event:Event):void{
    event.preventDefault();

    let s1=(document.getElementById("v")as HTMLInputElement)
     let s2=(document.getElementById("v1")as HTMLInputElement)

     console.log(s1);
     console.log(s2);

      let s3=(document.getElementById("n")as HTMLFormElement)
      s3.addEventListener("submit",handle)
     
     
}