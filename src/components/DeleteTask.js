import React from 'react';
import { IoMdTrash } from "react-icons/io";



function DeleteTask({ taskId, onDelete }) {
  return (
      <div
        className='delete'
        onClick={() => { 
          onDelete(taskId); 
        }}
      >
    <IoMdTrash
      title='Delete Task' 
    />
    </div>
  );
}

export default DeleteTask;