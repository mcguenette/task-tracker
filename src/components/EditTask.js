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
    <IoMdCreate />
  </div>
  );
}

export default EditTask;