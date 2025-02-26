import React, { useState } from 'react';
import Header from './Component/Header';
import ToDoList from './Component/ToDoList';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');  //adding newtask in to-do list

  const addTodo = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),     //generating unique key
        text: newTask,
      }
      setTodos([...todos, newTodo]);
      setNewTask('');
    }
    else{
      alert("Please fill the field")
    }
  };

  // delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // edit function
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {text: newText } : todo
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