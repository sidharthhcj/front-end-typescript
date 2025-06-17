var _a, _b;
var font = 12;
(_a = document.getElementById("l")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var s = document.getElementById("p");
    font += 2;
    s.style.fontSize = font + "px";
});
(_b = document.getElementById("l1")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var s = document.getElementById("p");
    font -= 2;
    s.style.fontSize = font + "px";
});
