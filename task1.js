var _a;
(_a = document.getElementById("c")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var s = document.getElementById("text").value;
    var li = document.createElement("li");
    li.textContent = s;
    var ul = document.getElementById("list");
    ul.appendChild(li);
    var storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    storedItems.push(s);
    localStorage.setItem("items", JSON.stringify(storedItems));
    document.getElementById("text").value = "";
});
