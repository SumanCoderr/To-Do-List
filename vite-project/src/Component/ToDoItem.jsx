import React, { useState } from 'react';

const ToDoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isChecked, setIsChecked] = useState(false); 


  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
    else{
      alert("Please fill the field")
    }
  };

  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };
  

  return (
    <li className={ todo.completed ? 'completed text-center' : ' text-center'} >
      {isEditing ? (
        <div >
          <input
            className='m-3 bg-amber-200 w-50 text-left p-2 break-words md:w-120 md:text-xl'
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className='bg-blue-900 text-white h-7 w-13 rounded-2xl cursor-pointer m-3 md:h-10 md:w-14' onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
      <input 
        type="checkbox" 
        id="check" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />         
       <div className={`my-2 mx-1 bg-amber-200 inline-block w-50 md:w-120 md:text-xl text-left p-2 break-words ${isChecked ? 'line-through' : ''}`} >{todo.text}</div>
          <button className='bg-red-600 text-white h-7 w-13 rounded-2xl cursor-pointer m-1 md:h-10 md:w-14 ' onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button className='bg-green-600 text-white h-7 w-10 rounded-2xl cursor-pointer m-1 md:h-10 md:w-14 ' onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;