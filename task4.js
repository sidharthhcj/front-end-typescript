var passwordInput = document.getElementById("password");
var toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    }
    else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
});
