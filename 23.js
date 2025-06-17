var s = (document.getElementById("box"));
function toggle() {
    var _a;
    (_a = document.getElementById("k")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        s.classList.toggle("active");
    });
}
toggle();
