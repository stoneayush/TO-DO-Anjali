const inputBox = document.getElementById("input-box");
const listContain = document.getElementsByClassName("listContainer")[0];

function list() {
  if (inputBox.value === "") {
    alert("Please Give the Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContain.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData()
  }
  inputBox.value = "";
}

listContain.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData()
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData()
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContain.innerHTML);
}
function getData() {
  listContain.innerHTML = localStorage.getItem("data");
}
getData()
