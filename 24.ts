function handle(event:Event):void{
event.preventDefault();

const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  const name=nameInput.value;
  const email=emailInput.value;

  console.log(name);
  console.log(email);
  
  const form = document.getElementById("myForm") as HTMLFormElement;
form.addEventListener("submit", handle);

}
