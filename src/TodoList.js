import { useState } from "react";

function TodoItem({ no, contents }) {
  return (
    <div>
      {no}.{contents}
    </div>
  );
}

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    //add new input to the current array of todos
    setTodos((currentArray) => [todo, ...currentArray]);
    //empty input
    setTodo("");
  };

  console.log(todos);

  return (
    <div>
      <h1>My TO DOs ({todos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="Write your to do...."
        />
        <button>Add to do</button>
      </form>

      <hr />

      <div>
        {todos.map((item, index) => (
          <TodoItem no={index + 1} contents={item} />
        ))}

        <hr />
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
