import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };

  const handelDelete = (id) => {
    const updateDelete = todos.filter((todo) => todo.id !== id);
    setTodos(updateDelete);
  };
  const handleEdit = (id, newEdit) => {
    const updateEdit = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newEdit } : todo
    );
    setTodos(updateEdit);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handelDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
