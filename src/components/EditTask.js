import React from 'react';
import { IoMdCreate } from "react-icons/io";


function EditTask({ task, onEdit }) {
  return (
    <div
        className='edit'
        onClick={() => {
        onEdit(task);
        }}
    >
    <IoMdCreate 
        title='Edit Task'
    />
  </div>
  );
}

export default EditTask;