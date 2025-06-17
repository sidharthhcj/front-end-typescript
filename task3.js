var _a;
(_a = document.getElementById("check")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var s1 = document.getElementById("1");
    var s2 = document.getElementById("2");
    var s3 = document.getElementById("3");
    if (s1.value !== s2.value) {
        var div = document.createElement("div");
        div.textContent = "not match";
        div.style.color = "red";
        s3.appendChild(div);
    }
    else {
        var div = document.createElement("div");
        div.textContent = "match";
        div.style.color = "green";
        s3.appendChild(div);
    }
});
