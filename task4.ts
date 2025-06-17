const passwordInput = document.getElementById("password") as HTMLInputElement;
const toggleButton = document.getElementById("toggle") as HTMLButtonElement;

toggleButton.addEventListener("click",()=>{
    if(passwordInput.type==="password"){
        passwordInput.type="text"
        toggleButton.textContent="Hide"
    }
    else {
   passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
})