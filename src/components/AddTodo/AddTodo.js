import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const result = onAddTodo(inputValue);
    
    if (result.success) {
      setInputValue('');
      setError('');
    } else {
      setError(result.error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) {
      setError('');
    }
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className={`add-todo-input ${error ? 'error' : ''}`}
        />
        <button type="submit" className="add-todo-button">
          Add Task
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default AddTodo;