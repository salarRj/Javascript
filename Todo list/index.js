var todos = [];
var addTodoForm = document.querySelector("#addTodoForm");
var listGroup = document.querySelector(".list-group");





// create list item
function createListItem (todovalue, todoIndex) {
  var li = document.createElement("li");
  li.setAttribute("class", "list-group-item d-flex justify-content-between");
  // li.innerHTML = todovalue;
  var span = document.createElement("span");
  span.innerHTML = todovalue;

  // delete icon
  var icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-trash-alt");
  li.appendChild(span);
  li.appendChild(icon);

  icon.addEventListener('click', function(){
    // Remove li from dom
    event.target.parentElement.remove();
    // remove li from Todos Array
    // Remove li from localstorage
    todos.splice(todoIndex,1);
    localStorage.setItem('todos', JSON.stringify(todos));
    
  })


  return li;
}


function renderTodos(todos) {
  todos.forEach(function (todo, index){
  var li = createListItem(todo.value, index);
  listGroup.appendChild(li);
  })
}


// Check is todo Exist in LocalStorage
var storedTodos = localStorage.getItem('todos');
// if Exist
if (storedTodos) {
  var parseStoredTodos = JSON.parse(storedTodos);
  todos = parseStoredTodos;
  console.log(parseStoredTodos);

  // Loop over array, create li Element and Append to the DOM
  renderTodos(todos);
}








addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Access input data
  // console.log(addTodoForm.todo.value);

  // Push todo Array
  var todoValue = addTodoForm.todo.value;

  todos.push({
    value: todoValue,
    completed: false,
  });
  addTodoForm.todo.value = "";

  localStorage.setItem('todos', JSON.stringify(todos));

  var li = createListItem(todoValue, todos.length - 1 );
  listGroup.appendChild(li);
});
