import React from 'react';
import Task from './Task';

function TaskList({ tasks = [], onDelete, onEdit, onComplete }) {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <>
      {tasks.length > 0 && tasks.map((task) => (
        <Task
          key={task.id} 
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
          onComplete={onComplete}
        />
      ))}
    </>
  );
}

export default TaskList;
