const input = document.getElementById("input");
const btn = document.getElementById("addBtn");
const lst = document.getElementById("list");
const dltBtn = document.getElementById("delete");

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter Some Data please!");
        return;
    }
    // Create li and add value to it
    const li = document.createElement("li");
    li.textContent = input.value;
    lst.appendChild(li);
    input.value = "";

    // Add delete Button in li
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    // Delete list using concepts like closure and fucntion registerat
    deleteBtn.addEventListener("click", () => {
        // debugger;
        li.remove();
        
    })
    return;
})

