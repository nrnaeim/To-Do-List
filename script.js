var entry = document.querySelector("#entry");
var add = document.querySelector("#add");
var list = document.querySelector("#list");

function addTask() {
  if (entry.value != "") {
    var li = document.createElement("li");
    list.appendChild(li);
    var p = document.createElement("p");
    li.appendChild(p);
    p.textContent = entry.value;
    entry.value = "";
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.classList.add("radio");
    p.prepend(input);
    var div = document.createElement("div");
    div.classList.add("edit-buttons");
    li.appendChild(div);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    div.appendChild(deleteButton);
    deleteButton.classList.add("delete");

    taskStyle();
    deleteTask();
  }
}
add.addEventListener("click", addTask);

function taskStyle() {
  var radios = document.querySelectorAll(".radio");
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", () => {
      var p = document.querySelectorAll("p");
      p[i].style.textDecoration = "line-through";
    });
  }
}
function deleteTask() {
  var deleteBtns = document.querySelectorAll(".delete");
  var li = document.querySelectorAll("li");
  deleteBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      li[i].remove();
      taskStyle();
    });
  });
}
