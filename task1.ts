document.getElementById("c")?.addEventListener("click", () => {
  let s = (document.getElementById("text") as HTMLInputElement).value;
  let li = document.createElement("li");
  li.textContent = s;

  let ul = document.getElementById("list") as HTMLUListElement;
  ul.appendChild(li); 
      const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    storedItems.push(s);
    localStorage.setItem("items", JSON.stringify(storedItems)); 
  (document.getElementById("text") as HTMLInputElement).value=""
});
