import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function CompleteTask({ task, onComplete }) {
  return (
    <div
      className='complete'
      onDoubleClick={() => onComplete(task.id)}
    >
      <IoMdCheckmarkCircleOutline
        className={task.completed ? 'icon-checked' : 'icon-unchecked'} 
      />
    </div>
  );
}

export default CompleteTask;