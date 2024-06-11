import React, { useState, useEffect } from 'react';

function AddTask({ onAddTask, isEditing, editingTask, onUpdateTask }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [errorVisibility, setErrorVisibility] = useState('');

  useEffect(() => {
    if (isEditing && editingTask) {
      setText(editingTask.text);
      setDay(editingTask.day);
    } else {
      setText('');
      setDay('');
    }
  }, [isEditing, editingTask]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) {

      setErrorVisibility(true);
      return;
    }
    if (!day) {
      setErrorVisibility(true);
      return;
    }

    if (isEditing) {
      onUpdateTask(editingTask.id, { text, day });
    } else {
      onAddTask({ text, day });
    }

    setText('');
    setDay('');
    setErrorVisibility(false);
  };

  return (
    <section>
      <form className='add-task-form' onSubmit={onSubmit}>
        <div className='form-section'>
          <input
            type='text'
            placeholder='New task'
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className='form-section'>
          <input
            type='datetime-local'
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </div>
        <div className='form-section buttons'>
          <button className='btn primary' type='submit'>
            {isEditing ? 'Save Task' : 'Add Task'}
          </button>
        </div>
      </form>
      <p 
      className={`error-message ${errorVisibility ? 'visible' : ''}`}>
        Please add information before submitting
      </p>
    </section>
  );
}

export default AddTask;
