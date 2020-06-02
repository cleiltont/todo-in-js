// Elements
const elements = {
  arr: JSON.parse(localStorage.getItem('todos')),
  btAdd: document.getElementById('btAdd'),
  addTodo: function (name) {
    arr.push(name);
    saveTodo();
  },
  renderTodo: function () {
    let list = document.getElementById('list');
    list.innerHTML = "";
    let i;

    for (i = 0; i < arr.length; i++) {
      let name = document.createTextNode(arr[i]);
      let item = document.createElement('li');
      let element = document.createElement('a');
      let btDel = document.createElement('i');
      btDel.innerHTML = "➖";
      btDel.setAttribute('onclick', `deleteTodo(${i})`);
      element.appendChild(name);
      item.appendChild(element);
      item.appendChild(btDel);
      list.appendChild(item);
    }
  },
  deleteTodo: pos => {
    arr.splice(pos, 1);
    saveTodo();
    renderTodo();
  },
  saveTodo: () => {
    localStorage.setItem('todos', JSON.stringify(arr));
    renderTodo();
  }
}; // destruturing

const {
  addTodo,
  renderTodo,
  deleteTodo,
  saveTodo
} = elements;
const {
  arr,
  btAdd
} = elements;
renderTodo(arr); // when click button add

btAdd.onclick = () => {
  let name = document.getElementById('newtd');

  if (name.value.trim() !== "" && name.value.length < 40) {
    addTodo(name.value);
    renderTodo();
    saveTodo();
    name.value = "";
  } else {
    name.value = "";
    alert('Fill in the add field!');
  }
};
