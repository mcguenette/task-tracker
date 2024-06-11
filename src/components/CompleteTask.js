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
        title='Mark as complete'
      />
    </div>
  );
}

export default CompleteTask;