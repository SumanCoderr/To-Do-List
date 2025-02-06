import React from 'react';

const Header = ({ newTask, setNewTask, addTodo }) => {
  return (
    <header>
      <h1 className='text-center text-3xl m-7'>TODO LIST APPLICATION</h1>
      <div className='text-center'>
      <input 
        className='bg-amber-50 mr-4 p-2 rounded-2xl'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className='bg-blue-900 text-white px-4 py-1 rounded-2xl cursor-pointer' onClick={addTodo}>Add</button>
      </div>
    </header>
  );
};

export default Header;