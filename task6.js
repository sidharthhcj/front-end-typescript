var s = document.querySelector("#sollow");
var p = document.querySelector("#select");
s.addEventListener("change", function () {
    p.innerHTML = s.value;
});
