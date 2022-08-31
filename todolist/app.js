var getForm = document.getElementById("form");
var getTextBox = document.getElementById("textbox");
var getUl = document.getElementById("list-group");

getForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addnew();
});

function addnew(todo) {
  var todotext = getTextBox.value;

  if (todo) {
    todotext = todo.text;
  }

  if (todotext) {
    const li = document.createElement("li");

    if (todo && todo.done) {
      li.classList.add("done");
    }
  }

  //   console.log(todotext);

  if (todotext) {
    const li = document.createElement("li");

    li.appendChild(document.createTextNode(todotext));

    getUl.appendChild(li);
    getTextBox.value = "";

    updatelocalstorage();

    // Left Click
    li.addEventListener("click", function () {
      li.classList.toggle("done");

      updatelocalstorage();
    });

    // Right Click
    li.addEventListener("contextmenu", () => {
      li.remove();
      updatelocalstorage();
    });
  }
}

function updatelocalstorage() {
  var getalllis = document.querySelectorAll("li");
  console.log(getalllis);

  const todos = [];

  getalllis.forEach(function (getalllis) {
    todos.push({
      text: getalllis.textContent,
      done: getalllis.classList.contains("done"),
    });
  });

  //   console.log(todos);

  localStorage.setItem("todos", JSON.stringify(todos));
}

var getalltodo = JSON.parse(localStorage.getItem("todos"));
console.log(getalltodo);

if (getalltodo) {
  getalltodo.forEach(function (getalltodos) {
    // console.log(getalltodo);
    // console.log(getalltodo.text);

    addnew(getalltodos);
  });
}
