import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [edit, setEdit] = useState({});
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  function generateId() {
    return Date.now();
  }

  function saveTodoHandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage("Activity name is required!");
    }

    setMessage("");

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);

      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);
    setActivity("");
  }

  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);

    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    <div className="position width bg-box">
      <div className="center">
        <h1>React - To Do List</h1>
      </div>
      <div className="center">
        {message && <div className="required ">{message}</div>}
      </div>
      <div className="center">
        <form onSubmit={saveTodoHandler}>
          <input
            type="text"
            placeholder="Activity name"
            value={activity}
            onChange={function (event) {
              setActivity(event.target.value);
            }}
          />
          <button type="submit" className="btn-add">
            {edit.id ? "Save" : "Add"}
          </button>
          {edit.id && <button onClick={cancelEditHandler}>Cancel</button>}
        </form>
      </div>
      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id} className="mb-list">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                  className="mr-checkbox"
                />
                {todo.activity} ({todo.done ? "Finished" : "Ongoing"})
                <button
                  className="ml-btn"
                  onClick={editTodoHandler.bind(this, todo)}
                >
                  Edit
                </button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to do :(</p>
      )}
    </div>
  );
}

export default App;
