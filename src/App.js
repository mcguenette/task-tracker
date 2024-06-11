import React, { useReducer, useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const initialState = {
  tasks: []
};

const types = {
  SET_TASKS: 'SET_TASKS',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  EDIT_TASK: 'EDIT_TASK'
};

const uniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case types.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case types.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case types.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        )
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);  // Added to track initial load

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      dispatch({ type: types.SET_TASKS, payload: storedTasks });
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    try {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [state.tasks]);

  const addTask = task => {
    const taskWithId = { id: uniqueId(), ...task, completed: false };
    dispatch({ type: types.ADD_TASK, payload: taskWithId });
  };

  const deleteTask = taskId => {
    dispatch({ type: types.DELETE_TASK, payload: taskId });
  };

  const completeTask = taskId => {
    dispatch({ type: types.COMPLETE_TASK, payload: taskId });
  };

  const editTask = task => {
    setIsEditing(true);
    setEditingTask(task);
  };

  const updateTask = (taskId, updatedTask) => {
    dispatch({ type: types.EDIT_TASK, payload: { id: taskId, ...updatedTask } });
    setIsEditing(false);
    setEditingTask(null);
  };

  return (
    <main>
      <div className='container'>
        <div className='flex'>
          <h1>Task Tracker</h1>
          <AddTask 
          onAddTask={addTask} 
          isEditing={isEditing} 
          editingTask={editingTask} 
          onUpdateTask={updateTask} 
          />
          <div className='grid'>
            <TaskList 
            tasks={state.tasks} 
            onDelete={deleteTask} 
            onEdit={editTask} 
            onComplete={completeTask} 
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
