import React from 'react';

const Header = ({ newTask, setNewTask, addTodo }) => {
  return (
    <header>
      <h1 className='text-center text-xl mt-16 m-7 md:text-4xl'>TO-DO LIST APPLICATION</h1>
      <div className='text-center'>
      <input 
        className='bg-amber-50 mr-4 p-2 rounded-2xl md:text-xl md: mb-2'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className='bg-blue-900 text-white px-4 py-1 rounded-2xl cursor-pointer ' onClick={addTodo}>Add</button>
      </div>
    </header>
  );
};

export default Header;