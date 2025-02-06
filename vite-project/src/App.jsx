import React, { useState } from 'react';
import Header from './Component/Header';
import ToDoList from './Component/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTask,
      };
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  

  return (
    <div>
      <Header newTask={newTask} setNewTask={setNewTask} addTodo={addTodo} />
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;