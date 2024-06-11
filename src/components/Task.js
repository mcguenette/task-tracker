import React from 'react';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';
import CompleteTask from './CompleteTask';

function Task({ task, onDelete, onEdit, onComplete }) {
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        };
        return date.toLocaleString(undefined, options);
      };
  return (
    <section className='task'>
      <div className='task-left'>
        <div className={`text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </div>
      </div>
      <div className='task-right'>
      <div className='time'>{formatDateTime(task.day)}</div>
        <div className='icons'>
          <CompleteTask task={task} onComplete={onComplete} />
          <EditTask task={task} onEdit={onEdit} />
          <DeleteTask taskId={task.id} onDelete={onDelete} />
        </div>
      </div>
    </section>
  );
}

export default Task;
